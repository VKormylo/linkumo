import { useForm } from 'react-hook-form'
import { useOutletContext } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { authService } from '~/services/auth-service'

import { UserSignupSchema, type UserSignup } from '~/schemas/auth'
import type { AuthOutletContext } from '~/types/auth.types'

import Button from '~/components/button/Button'
import FormInput from '~/components/form-input/FormInput'

import GoogleIcon from '~/assets/icons/google.svg?react'

const AuthSignup: React.FC = () => {
  const { signInWithGoogle } = useOutletContext<AuthOutletContext>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignup>({
    resolver: zodResolver(UserSignupSchema)
  })

  const { mutate: signup } = useMutation({
    mutationFn: authService.signup
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
          {...register('name')}
          label="Name"
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        <FormInput
          {...register('password')}
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
        />
      </div>
      <Button
        onClick={handleSubmit((data) => signup(data))}
        className="mt-5 mb-6"
        stretch
      >
        Sign Up
      </Button>
      <div className="relative">
        <div className="absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-primary-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 rubik-12-regular text-primary-400">
          or
        </div>
      </div>
      <Button
        onClick={signInWithGoogle}
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

export default AuthSignup
