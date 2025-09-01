import type React from 'react'
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
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
  maxLength,
  required = false,
  className,
  iconStart,
  iconEnd
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label className="text-base font-medium text-primary-800">
          {label}
        </label>
      )}
      <div
        className={`flex h-[50px] items-center rounded-md border-1 border-primary-100 bg-white px-3 text-primary-800 focus-within:bg-primary-50 ${className}`}
      >
        {iconStart && (
          <span className="mr-3 flex h-[18px] w-[18px] items-center text-primary-800">
            {iconStart}
          </span>
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          required={required}
          className="flex-1 bg-transparent text-primary-800 placeholder:text-sm placeholder:text-primary-400 focus:outline-none"
        />

        {iconEnd && (
          <span className="ml-3 flex h-[18px] w-[18px] items-center text-primary-800">
            {iconEnd}
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
