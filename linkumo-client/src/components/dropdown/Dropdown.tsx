import React from 'react'
import { Link } from 'react-router-dom'
import { useClickOutside } from '~/hooks/useClickOutside'
import type { Position, TailwindStyles } from '~/types/common.types'
import { styles } from './Dropdown.styles'

type DropdownItem =
  | {
      label: string
      onClick?: never
      to?: never
    }
  | {
      label: string
      onClick: () => void
      to?: never
    }
  | {
      label: string
      to: string
      onClick?: never
    }

interface BaseDropdownProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  trigger: React.ReactNode
  position?: Position
  maxHeight?: number
  width?: number
  className?: TailwindStyles
  scrollable?: boolean
  disabled?: boolean
  disableToggle?: boolean
  multipleChoice?: boolean
}

interface DropdownWithItems extends BaseDropdownProps {
  items: DropdownItem[]
  children?: never
}

interface DropdownWithChildren extends BaseDropdownProps {
  children: React.ReactNode
  items?: never
}

type DropdownProps = DropdownWithItems | DropdownWithChildren

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  setIsOpen,
  trigger,
  items,
  children,
  maxHeight,
  width,
  position = 'bottom',
  className = '',
  scrollable = false,
  disabled = false,
  disableToggle = false,
  multipleChoice = false
}) => {
  const ref = useClickOutside(() => setIsOpen(false))

  const renderDropdownItem = (item: DropdownItem) => {
    if (item.to) {
      return (
        <li key={item.label}>
          <Link className={styles.listItem} to={item.to}>
            {item.label}
          </Link>
        </li>
      )
    }

    if (item.onClick) {
      return (
        <li
          key={item.label}
          className={styles.listItem}
          onClick={() => {
            item.onClick()
            if (!multipleChoice) setIsOpen(false)
          }}
        >
          {item.label}
        </li>
      )
    }

    return (
      <li key={item.label} className={styles.listItem}>
        {item.label}
      </li>
    )
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div onClick={() => !disableToggle && setIsOpen((prev) => !prev)}>
        {trigger}
      </div>
      {!disabled && (
        <div
          className={`absolute z-20 origin-top rounded border border-primary-100 bg-white drop-shadow-[0_8px_15px_rgba(0,0,0,0.07)] transition-all duration-200 ease-out ${styles.box(isOpen, scrollable)} ${styles.position[position]}`}
          style={{
            maxHeight,
            width
          }}
        >
          <ul className="py-1">
            {items ? items.map((item) => renderDropdownItem(item)) : children}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
