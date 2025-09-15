import { useCallback } from 'react'

interface GoogleAuthResponse {
  credential: string
  select_by: string
}

interface UseGoogleAuthProps {
  onSuccess: (idToken: string) => void
  onError: (error: string) => void
}

export const useGoogleAuth = ({ onSuccess, onError }: UseGoogleAuthProps) => {
  const initializeGoogleAuth = useCallback(() => {
    if (typeof window === 'undefined' || !window.google) {
      onError('Google Auth not supported')
      return
    }

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (response: GoogleAuthResponse) => {
        if (response.credential) {
          onSuccess(response.credential)
        } else {
          onError('No credential received from Google')
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true,
      use_fedcm_for_prompt: true
    })
  }, [onSuccess, onError])

  const signInWithGoogle = useCallback(() => {
    if (typeof window === 'undefined' || !window.google) {
      onError('Google Auth not supported')
      return
    }

    try {
      window.google.accounts.id.prompt()
    } catch {
      onError('Google authentication failed')
    }
  }, [onError])

  return {
    initializeGoogleAuth,
    signInWithGoogle
  }
}

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: unknown) => void
          prompt: () => void
        }
      }
    }
  }
}
