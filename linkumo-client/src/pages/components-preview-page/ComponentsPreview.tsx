import { useState } from 'react'
import Button from '~/components/button/Button'
import Input from '~/components/input/Input'
import SearchIcon from '~/assets//icons/search.svg?react'
import AddIcon from '~/assets/icons/add.svg?react'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

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
        <Input
          value={searchValue}
          placeholder="Search"
          onChange={setSearchValue}
          className="w-[390px]"
          startIcon={<SearchIcon />}
        />
        <div className="flex-row gap-[10px]">
          <Button variant="primary" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button variant="primary-outlined" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button variant="secondary-outlined" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button
            variant="primary"
            className="mt-10 w-xs"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ComponentsPreview
