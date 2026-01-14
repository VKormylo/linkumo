import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from 'react'

import { axiosClient } from '~/plugins/axiosClient'

import { authService } from '~/services/auth-service'

interface AuthContextParams {
  accessToken: string | null
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
  isAuthenticated: boolean
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextParams | null>(null)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const isAuthenticated = Boolean(accessToken)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { accessToken } = await authService.refresh()
        setAccessToken(accessToken)
      } catch {
        setAccessToken(null)
      }
    }

    fetchUser()
  }, [])

  useLayoutEffect(() => {
    const authInterceptor = axiosClient.interceptors.request.use((config) => {
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    })

    return () => {
      axiosClient.interceptors.request.eject(authInterceptor)
    }
  }, [accessToken])

  useLayoutEffect(() => {
    const refreshInterceptor = axiosClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (originalRequest.url?.includes('/refresh')) {
          setAccessToken(null)
          return Promise.reject(error)
        }

        if (error.response.status === 401) {
          try {
            const { accessToken } = await authService.refresh()
            setAccessToken(accessToken)

            originalRequest.headers.Authorization = `Bearer ${accessToken}`
            originalRequest._retry = true

            return axiosClient(originalRequest)
          } catch {
            setAccessToken(null)
          }
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosClient.interceptors.response.eject(refreshInterceptor)
    }
  })

  const logout = async () => {
    setAccessToken(null)
    await authService.logout()
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuthContext }
