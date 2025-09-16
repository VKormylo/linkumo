import { useState } from 'react'
import Button from '~/components/button/Button'
import Input from '~/components/input/Input'
import SearchIcon from '~/assets//icons/search.svg?react'
import AddIcon from '~/assets/icons/add.svg?react'
import SelectInput from '~/components/select-input/SelectInput'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState('1')

  const options = [
    { value: '1', title: 'Option 1' },
    { value: '2', title: 'Option 2' },
    { value: '3', title: 'Option 3' }
  ]

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
          <Button color="primary" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button color="primary" variant="outlined" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button color="secondary" variant="outlined" className="mt-10 w-xs">
            Sign Up
          </Button>
          <Button
            color="primary"
            className="mt-10 w-xs"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
        <div>
          <SelectInput
            value={selectValue}
            setValue={setSelectValue}
            label="Select"
            options={options}
            className="mt-10"
          />
        </div>
      </div>
    </div>
  )
}

export default ComponentsPreview
