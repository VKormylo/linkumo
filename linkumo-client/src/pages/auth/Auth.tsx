import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '~/components/button/Button'
import AuthBackground from '~/assets/images/auth-bg.png'
import LogoIcon from '~/assets/logo.svg?react'

enum AuthActionEnum {
  signup = 'signup',
  login = 'login'
}

const Auth: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const action = pathname.split('/').pop() as AuthActionEnum

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

  const handleAuthSwap = () => {
    const actionType =
      action === AuthActionEnum.signup
        ? AuthActionEnum.login
        : AuthActionEnum.signup

    navigate(`/auth/${actionType}`)
  }

  const formClass = action === AuthActionEnum.login ? 'translate-x-full' : ''
  const swapClass =
    action === AuthActionEnum.login
      ? '-translate-x-full items-end text-right'
      : 'items-start'

  return (
    <div className="flex h-screen w-screen items-center bg-primary-50">
      <div className="mx-auto flex h-[800px] w-[1100px] items-center bg-white drop-shadow-[0_0_30px_rgba(0,0,0,0.05)]">
        <div
          className={`flex h-full w-1/2 flex-col px-20 py-14 ${formClass} transition-all duration-500 ease-out`}
        >
          <div>
            <LogoIcon />
          </div>
          <p className="mt-8 mb-3 rubik-24-semibold">
            {formData[action].title}
          </p>
          <p className="rubik-16-regular text-primary-400">
            {formData[action].description}
          </p>
          <Outlet />
        </div>
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
          <Button variant="outlined" onClick={handleAuthSwap}>
            {formData[action].button}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Auth
