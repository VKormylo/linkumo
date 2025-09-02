import { useState } from 'react'
import Input from '~/components/input/Input'
import SearchIcon from '~/assets//icons/search.svg?react'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

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
        <Input
          value={searchValue}
          placeholder="Search"
          onChange={setSearchValue}
          className="w-[390px]"
          startIcon={<SearchIcon />}
        />
      </div>
    </div>
  )
}

export default ComponentsPreview
