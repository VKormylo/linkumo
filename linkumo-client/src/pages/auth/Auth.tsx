import LogoIcon from '~/assets/logo.svg?react'
import AuthBackground from '~/assets/images/auth-bg.png'
import AuthSignup from './auth-signup/AuthSignup'
import { useState, type MouseEvent } from 'react'
import AuthLogin from './auth-login/AuthLogin'

enum AuthActionEnum {
  signup = 'signup',
  login = 'signin'
}

const Auth: React.FC = () => {
  const [actionType, setActionType] = useState<AuthActionEnum>(
    AuthActionEnum.signup
  )

  const formData = {
    [AuthActionEnum.signup]: {
      title: 'Create Account',
      description: 'Please create your account',
      button: 'Sign In'
    },
    [AuthActionEnum.login]: {
      title: 'Welcome Back',
      description: 'Please sign in to your account',
      button: 'Sign Up'
    }
  }

  function handleSetActionType(
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    e.preventDefault()

    setActionType((prev) =>
      prev === AuthActionEnum.signup
        ? AuthActionEnum.login
        : AuthActionEnum.signup
    )
  }

  const swapClass =
    actionType === AuthActionEnum.login
      ? '-translate-x-full items-end text-right'
      : 'items-start'

  const formClass =
    actionType === AuthActionEnum.login ? 'translate-x-full' : ''

  return (
    <div className="flex h-screen w-screen items-center bg-primary-50">
      <div className="mx-auto flex h-[800px] w-[1100px] items-center bg-white">
        <form
          className={`flex h-full w-1/2 flex-col justify-between px-20 py-14 ${formClass} transition-all duration-500 ease-out`}
        >
          <LogoIcon />
          <div>
            <p className="mt-8 mb-3 rubik-24-semibold">
              {formData[actionType].title}
            </p>
            <p className="rubik-16-regular text-primary-400">
              {formData[actionType].description}
            </p>
            {actionType === AuthActionEnum.signup ? (
              <AuthSignup />
            ) : (
              <AuthLogin />
            )}
          </div>
        </form>
        <div
          className={`flex h-full w-1/2 flex-col justify-end bg-cover bg-center px-9 py-14 ${swapClass} transition-all duration-500 ease-out`}
          style={{
            backgroundImage: `url(${AuthBackground})`
          }}
        >
          <p className="mb-8 mulish-60-black leading-16 text-white">
            Modern link organizer for{' '}
            <span className="text-primary-800">work and life.</span>
          </p>
          <button
            className="cursor-pointer rounded-md border px-14 py-4 rubik-16-medium"
            onClick={handleSetActionType}
          >
            {formData[actionType].button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
