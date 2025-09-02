import Checkbox from '~/components/checkbox/Checkbox'
import Input from '~/components/input/Input'
import GoogleIcon from '~/assets/icons/google.svg?react'

const AuthSignup: React.FC = () => {
  return (
    <div className="mt-7">
      <div className="flex flex-col gap-4.5">
        <Input
          label="Email"
          value=""
          placeholder="Enter your email address"
          onChange={() => {}}
        />
        <Input
          label="Name"
          value=""
          placeholder="Enter your name"
          onChange={() => {}}
        />
        <Input
          label="Password"
          value=""
          placeholder="Enter password"
          onChange={() => {}}
        />
        <Checkbox name="checkbox" label="Remember me" />
      </div>
      <button className="mt-5 mb-6 w-full cursor-pointer rounded-md bg-primary-800 px-9 py-4 rubik-16-medium text-white">
        Sign Up
      </button>
      <div className="relative">
        <div className="absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-primary-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 rubik-12-regular text-primary-400">
          or
        </div>
      </div>
      <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-primary-100 px-9 py-4 rubik-14-regular">
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  )
}

export default AuthSignup
