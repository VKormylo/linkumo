import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Position, TailwindStyles } from '~/types/common.types'
import Backdrop from '../backdrop/Backdrop'
import { styles } from './Dropdown.styles'

type DropdownItem =
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
  trigger: React.ReactNode
  position?: Position
  maxHeight?: number
  width?: number
  className?: TailwindStyles
  scrollable?: boolean
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
  trigger,
  items,
  children,
  maxHeight,
  width,
  position = 'bottom',
  className = '',
  scrollable = false
}) => {
  const [isOpen, setIsOpen] = useState(false)

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

    return (
      <li
        key={item.label}
        className={styles.listItem}
        onClick={() => {
          item.onClick?.()
          setIsOpen(false)
        }}
      >
        {item.label}
      </li>
    )
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} transparent />
      <div onClick={() => setIsOpen((prev) => !prev)}>{trigger}</div>
      <div
        className={`absolute z-50 origin-top rounded border border-primary-100 bg-white shadow-lg transition-all duration-200 ease-out ${styles.box(isOpen, scrollable)} ${styles.position[position]}`}
        style={{
          maxHeight,
          width
        }}
      >
        <ul className="py-1">
          {items ? items.map((item) => renderDropdownItem(item)) : children}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
