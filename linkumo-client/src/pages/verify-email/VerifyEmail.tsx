import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { authService } from '~/services/auth-service'

type Status = 'pending' | 'success' | 'error'

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<Status>('pending')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }

    authService
      .verifyEmail(token)
      .then(() => {
        setStatus('success')

        setTimeout(() => {
          navigate('/auth/login')
        }, 1000)
      })
      .catch(() => {
        setStatus('error')
      })
  }, [token, navigate])

  if (status === 'pending') return <div>Verifying your email...</div>
  if (status === 'success') return <div>Email verified successfully!</div>
  if (status === 'error') return <div>Email verification failed!</div>

  return null
}

export default VerifyEmail
