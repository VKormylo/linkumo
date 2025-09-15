import { useState } from 'react'
import Button from '~/components/button/Button'
import Input from '~/components/input/Input'
import SearchIcon from '~/assets//icons/search.svg?react'
import AddIcon from '~/assets/icons/add.svg?react'
import SelectInput from '~/components/select-input/SelectInput'
import Dropdown from '~/components/dropdown/Dropdown'

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
        <SelectInput
          value={selectValue}
          setValue={setSelectValue}
          label="Select"
          options={options}
          className="mt-10"
        />
        <div className="mt-10">
          <Dropdown
            trigger={<label>Open</label>}
            maxHeight={200}
            position="right"
            items={[
              { label: 'Option 1' },
              { label: 'Option 2' },
              { label: 'Option 3' }
            ]}
            width="134px"
          />
          <Dropdown
            trigger={
              <input
                placeholder="Enter tag name"
                className="border px-2 py-1"
              />
            }
            maxHeight={120}
            className="ml-10"
            width="190px"
          >
            <ul>
              {[
                'frontend',
                'backend',
                'python',
                'java',
                'go',
                'c++',
                'php'
              ].map((tag) => (
                <li
                  key={tag}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => console.log('Selected:', tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default ComponentsPreview
