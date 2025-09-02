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
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
  maxLength,
  required = false,
  className
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      {label && <label className="rubik-16-medium">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        required={required}
        className={`h-[50px] rounded-md border border-primary-100 px-4 text-primary-800 placeholder:text-sm placeholder:text-primary-400 focus:bg-primary-50 ${className}`}
      />
    </div>
  )
}

export default Input
