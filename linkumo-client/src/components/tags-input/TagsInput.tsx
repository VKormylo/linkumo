import { useRef, useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import Tag from '../tag/Tag'

interface TagsInputProps {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const addTag = (value: string): boolean => {
    if (value === '' || tags.includes(value)) return false
    setTags((prev: string[]) => [...prev, value])
    return true
  }

  const removeTag = (value: string) => {
    setTags(tags.filter((tag) => tag !== value))
  }

  const onTagEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    const value = e.currentTarget.value
    if (addTag(value)) e.currentTarget.value = ''
  }

  const triggerFocus = (e: React.MouseEvent<HTMLInputElement>) => {
    const trigger = (e.target as HTMLInputElement).dataset.triggerFocus
    if (trigger) inputRef.current?.focus()
  }

  const inputElement = (
    <input
      ref={inputRef}
      className="w-[130px] rubik-14-regular placeholder:rubik-12-regular placeholder:text-primary-400"
      placeholder="Enter tag name"
      onKeyDown={onTagEnter}
      onFocus={() => setIsDropdownOpen(true)}
    />
  )

  // TODO: Replace with filtered tags from user profile
  const dropdownItems = tags.map((tag) => ({
    label: tag,
    onClick: () => addTag(tag)
  }))

  return (
    <div>
      <p className="mb-2.5 rubik-16-medium">Tags</p>
      <div
        className="flex cursor-text flex-wrap gap-2 rounded-sm border border-primary-100 px-3.5 py-2"
        onClick={triggerFocus}
        data-trigger-focus
      >
        {tags.length > 0 && (
          <div className="flex cursor-default flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag} value={tag} onDelete={() => removeTag(tag)} />
            ))}
          </div>
        )}
        <Dropdown
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          trigger={inputElement}
          items={dropdownItems}
          width={190}
          maxHeight={137}
          disabled={tags.length === 0}
          disableToggle
          scrollable
          multipleChoice
        />
      </div>
    </div>
  )
}

export default TagsInput
