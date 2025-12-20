import { useState } from 'react'
import { useClickOutside } from '~/hooks/useClickOutside'
import type { TailwindStyles } from '~/types/common.types'
import ArrowDownIcon from '~/assets/icons/arrow-down.svg?react'
import { styles } from './SelectInput.styles'
import Svg from '../svg/Svg'

interface SelectOption {
  value: string
  title: string
}

interface SelectInputProps {
  value: string
  setValue: (value: string) => void
  label: string
  options: SelectOption[]
  className?: TailwindStyles
}

const SelectInput = ({
  value,
  setValue,
  label,
  options,
  className
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>(
    options.find((option) => option.value === value)!.title
  )

  const ref = useClickOutside(() => setIsOpen(false))

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLLIElement).dataset.value!
    const title = (e.target as HTMLLIElement).textContent!
    setIsOpen(false)
    setSelectedOption(title)
    setValue(value)
  }

  return (
    <div
      ref={ref}
      className={`relative inline-block min-w-[150px] cursor-pointer ${className}`}
    >
      {label && (
        <span className="absolute top-0 left-2 z-21 -translate-y-1/2 bg-white px-2 rubik-14-regular">
          {label}
        </span>
      )}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative z-20 flex items-center justify-between ${styles.box.color.primary} ${styles.box.size.medium} ${styles.box.open(isOpen)}`}
      >
        <span>{selectedOption}</span>
        <Svg
          Component={ArrowDownIcon}
          width={10}
          height={14}
          className={`${isOpen && 'rotate-180'}`}
        />
      </div>
      <ul
        className={`absolute z-21 w-full origin-top rounded-sm bg-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out ${styles.options(isOpen)}`}
      >
        {options.map((item) => (
          <li
            className={`cursor-pointer list-none px-4 py-2.5 rubik-16-regular hover:bg-primary-100 ${selectedOption === item.title && 'bg-primary-50'}`}
            onClick={handleSelect}
            key={item.value}
            data-value={item.value}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectInput
