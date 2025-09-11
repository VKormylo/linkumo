import { createContext, useContext, useState } from 'react'

interface AuthContextParams {
  accessToken: string | null
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
  isAuthenticated: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextParams | null>(null)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const isAuthenticated = Boolean(accessToken)

  const logout = () => {
    setAccessToken(null)
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
