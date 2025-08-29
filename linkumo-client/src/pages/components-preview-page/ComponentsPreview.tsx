import { useState } from 'react'
import Button from '~/components/button/Button'
import Input from '~/components/input/Input'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h1 className="mt-10 text-2xl text-primary-800">
        Welcome to components page
      </h1>
      <div className="m-10 flex-col">
        <Input
          label="Email"
          value={inputValue}
          placeholder="Enter your email address"
          required
          onChange={setInputValue}
          className="w-[390px]"
        />
        <Button variant="primary" className="mt-10 w-xs">
          Sign Up
        </Button>
        <Button variant="primary-outlined" className="mt-10 w-xs">
          Sign Up
        </Button>
        <Button variant="secondary-outlined" className="mt-10 w-xs">
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default ComponentsPreview
