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
import CollectionForm from '~/containers/modal-forms/collection-form/CollectionForm'
import LinkCard from '~/components/link-card/LinkCard'
import LinkItem from '~/components/link-item/LinkItem'
import LinksContainer from '~/containers/links-container/LinksContainer'

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
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false)

  const links = [
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    },
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    },
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    },
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    },
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    },
    {
      url: 'https://youtube.com',
      title: 'How to build a fullstack App with React and Node.js',
      tags: ['react', 'node.js'],
      isFavorite: false
    }
  ]

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
          <IconButton
            color="secondary"
            outlined
            onClick={() => {}}
            size="large"
          >
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
        <div className="flex gap-5">
          <button onClick={() => setIsLinkModalOpen(true)}>
            Open Link Modal
          </button>
          <button onClick={() => setIsCollectionModalOpen(true)}>
            Open Collection Modal
          </button>
          <Modal
            isOpen={isLinkModalOpen}
            onClose={() => setIsLinkModalOpen(false)}
            title="Create link"
          >
            <LinkForm
              type="create"
              onCancel={() => setIsLinkModalOpen(false)}
              onSave={() => setIsLinkModalOpen(false)}
            />
          </Modal>
          <Modal
            isOpen={isCollectionModalOpen}
            onClose={() => setIsCollectionModalOpen(false)}
            title="Create collection"
          >
            <CollectionForm
              onCancel={() => setIsCollectionModalOpen(false)}
              onSave={() => setIsCollectionModalOpen(false)}
            />
          </Modal>
        </div>
        <div>
          <LinkCard
            url="https://youtube.com"
            title="How to build a fullstack App with React and Node.js"
            tags={['react', 'node.js']}
            isFavorited={false}
          />
          <div className="flex w-[1000px] flex-col gap-4">
            <LinkItem
              url="https://youtube.com"
              title="How to build a fullstack App with React and Node.js"
              tags={['react', 'node.js']}
              isFavorited={false}
            />
          </div>
        </div>
        <div>
          <LinksContainer links={links} view="grid" />
        </div>
      </div>
    </div>
  )
}

export default ComponentsPreview
