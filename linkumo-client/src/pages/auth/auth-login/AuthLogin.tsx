import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserLoginSchema, type UserLogin } from '~/schemas/auth'
import { useAuthContext } from '~/context/authContext'
import { authService } from '~/services/auth-service'
import Checkbox from '~/components/checkbox/Checkbox'
import FormInput from '~/components/form-input/FormInput'
import Button from '~/components/button/Button'
import GoogleIcon from '~/assets/icons/google.svg?react'

const AuthLogin: React.FC = () => {
  const navigate = useNavigate()
  const { setAccessToken } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
    resolver: zodResolver(UserLoginSchema)
  })

  const { mutate: login } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setAccessToken(data.accessToken)
      navigate('/')
    }
  })

  return (
    <form className="mt-7">
      <div className="flex flex-col gap-4.5">
        <FormInput
          {...register('email')}
          label="Email"
          placeholder="Enter your email address"
          error={errors.email?.message}
        />
        <FormInput
          {...register('password')}
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
        />
        <Checkbox {...register('rememberMe')} label="Remember me" />
      </div>
      <Button
        onClick={handleSubmit((data) => login(data))}
        className="mt-5 mb-6"
        stretch
      >
        Sign In
      </Button>
      <div className="relative">
        <div className="absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-primary-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 rubik-12-regular text-primary-400">
          or
        </div>
      </div>
      <Button
        color="tertiary"
        variant="outlined"
        size="small"
        className="mt-6"
        stretch
        type="button"
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </form>
  )
}

export default AuthLogin
