import { useState } from 'react'
import Button from '~/components/button/Button'
import Input from '~/components/input/Input'
import SearchIcon from '~/assets//icons/search.svg?react'
import AddIcon from '~/assets/icons/add.svg?react'
import SelectInput from '~/components/select-input/SelectInput'
import Dropdown from '~/components/dropdown/Dropdown'
import IconButton from '~/components/icon-button/IconButton'
import Svg from '~/components/svg/Svg'
import GridViewIcon from '~/assets/icons/grid-view.svg?react'
import ListViewIcon from '~/assets/icons/list-view.svg?react'
import Tag from '~/components/tag/Tag'
import Modal from '~/components/modal/Modal'
import LinkForm from '~/containers/modal-forms/link-form/LinkForm'

const ComponentsPreview = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState('1')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const options = [
    { value: '1', title: 'Option 1' },
    { value: '2', title: 'Option 2' },
    { value: '3', title: 'Option 3' }
  ]

  const tagValues = [
    'react',
    'javascript',
    'python',
    'java',
    'go',
    'c++',
    'php'
  ]

  const [tags, setTags] = useState(tagValues)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <h1 className="mt-10 text-2xl text-primary-800">
        Welcome to components page
      </h1>
      <div className="m-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
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
          <Button color="primary" className="mt-4 w-xs" startIcon={<AddIcon />}>
            Add
          </Button>
        </div>
        <div className="flex gap-4">
          <IconButton onClick={() => {}}>
            <Svg Component={GridViewIcon} width={28} height={28} />
          </IconButton>
          <IconButton color="secondary" outlined onClick={() => {}}>
            <Svg Component={ListViewIcon} width={28} height={28} />
          </IconButton>
        </div>
        <SelectInput
          value={selectValue}
          setValue={setSelectValue}
          label="Select"
          options={options}
          className="self-start"
        />
        <div className="mt-10">
          <Dropdown
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
            trigger={<label>Open</label>}
            position="right"
            items={[
              { label: 'Option 1', to: '/option-1' },
              { label: 'Option 2', onClick: () => {} },
              { label: 'Option 3', onClick: () => {} }
            ]}
          />
          <Dropdown
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
            trigger={
              <input
                placeholder="Enter tag name"
                className="border px-2 py-1"
              />
            }
            maxHeight={120}
            className="ml-10"
            width={190}
            scrollable
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="cursor-pointer px-4 py-2 hover:bg-primary-50"
                onClick={() => console.log('Selected:', tag)}
              >
                {tag}
              </li>
            ))}
          </Dropdown>
        </div>
        <div className="flex gap-4">
          <Tag value="react" />
          {tags.map((tag) => (
            <Tag
              value={tag}
              key={tag}
              onDelete={() => setTags(tags.filter((t) => t !== tag))}
            />
          ))}
        </div>
        <div>
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Create link"
          >
            <LinkForm
              type="edit"
              data={{
                link: 'https://www.google.com',
                description: 'Google',
                tags: ['google', 'search']
              }}
              onCancel={() => setIsModalOpen(false)}
              onSave={() => setIsModalOpen(false)}
            />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ComponentsPreview
