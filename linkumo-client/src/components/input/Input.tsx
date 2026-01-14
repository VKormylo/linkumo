import React from 'react'

import type { TailwindStyles } from '~/types/common.types'

type InputProps = {
  type?: 'password' | 'text'
  label?: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  maxLength?: number
  required?: boolean
  className?: TailwindStyles
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
  maxLength,
  required = false,
  className = '',
  startIcon,
  endIcon
}) => {
  const iconClass = `absolute top-1/2 -translate-y-1/2 ${startIcon ? 'left-0' : 'right-0'} cursor-pointer p-3 [&>svg]:w-[18px] [&>svg]:h-[18px]`
  const leftIconClass = startIcon ? 'pl-11' : ''
  const rightIconClass = endIcon ? 'pr-11' : ''

  return (
    <div className={`relative flex flex-col gap-2.5 ${className}`}>
      {label && <label className="rubik-16-medium">{label}</label>}
      {startIcon && <button className={iconClass}>{startIcon}</button>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        required={required}
        className={`w-full rounded-md border border-primary-100 bg-transparent px-4.5 ${leftIconClass} ${rightIconClass} py-3 rubik-16-regular text-primary-800 outline-none placeholder:text-sm placeholder:text-primary-400 focus:bg-primary-50`}
      />
      {endIcon && <button className={iconClass}>{endIcon}</button>}
    </div>
  )
}

export default Input
