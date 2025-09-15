import React, { useState, useRef, useEffect } from 'react'
import type { TailwindStyles } from '~/types/common.types'

type DropdownItem = {
  label: string
  onClick?: () => void
}

type DropdownProps = {
  trigger: React.ReactNode
  items?: DropdownItem[]
  children?: React.ReactNode
  position?: 'bottom' | 'top' | 'left' | 'right'
  maxHeight?: number
  className?: TailwindStyles
  width?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  children,
  position = 'bottom',
  maxHeight = 200,
  className,
  width = ''
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const positionClasses: Record<string, string> = {
    bottom: 'top-full mt-2 left-0',
    top: 'bottom-full mb-2 left-0',
    left: 'right-full top-0 mr-2',
    right: 'left-full top-0 ml-2'
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>

      <div
        className={`absolute min-w-[150px] rounded border border-primary-100 bg-white shadow-lg transition-all duration-200 ease-out ${positionClasses[position]} ${open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'} z-50 origin-top`}
        style={{
          maxHeight: open ? maxHeight : 0,
          overflowY: 'auto',
          width: width
        }}
      >
        {items ? (
          <ul className="py-1">
            {items.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
                className="cursor-pointer px-3 py-2 rubik-14-regular text-primary-800 hover:bg-primary-50"
              >
                {item.label}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-1">{children}</div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
