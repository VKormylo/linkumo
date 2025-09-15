import React from 'react'
import CheckIcon from '~/assets/icons/check.svg?react'
import type { TailwindStyles } from '~/types/common.types'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: TailwindStyles
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label
        className={`flex cursor-pointer items-center self-start ${className}`}
      >
        <input ref={ref} type="checkbox" className="peer hidden" {...props} />
        <div className="relative inline-block h-5 w-5 rounded-xs border-2 border-primary-800 transition-all peer-checked:border-primary-800 peer-checked:bg-primary-800">
          <CheckIcon className="absolute top-1/2 left-1/2 h-[10px] w-[12px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <span className="pl-3 rubik-14-regular">{label}</span>
      </label>
    )
  }
)

export default Checkbox
