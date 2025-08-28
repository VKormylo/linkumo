import { useState } from 'react'
import Input from '~/components/input/Input'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h1 className="mt-10 text-2xl text-primary-800">
        Welcome to components page
      </h1>
      <div className="m-10 flex-col gap-10">
        <Input
          label="Email"
          value={inputValue}
          placeholder="Enter your email address"
          required
          onChange={setInputValue}
          className="w-[390px]"
        />
      </div>
    </div>
  )
}

export default ComponentsPreview
