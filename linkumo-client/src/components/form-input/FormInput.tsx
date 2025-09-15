import React from 'react'
import type { TailwindStyles } from '~/types/common.types'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: TailwindStyles
  error?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, className, error, ...props }, ref) => {
    const errorClass = error ? 'border-red-500' : 'border-primary-100'

    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={props.name} className="mb-2.5 rubik-16-medium">
            {label}
          </label>
        )}
        <input
          id={props.name}
          ref={ref}
          {...props}
          className={`rounded-md border bg-transparent px-4.5 py-3 rubik-16-regular text-primary-800 placeholder:text-sm placeholder:text-primary-400 focus:bg-primary-50 focus:outline-none ${errorClass} ${className}`}
        />
        {error && (
          <span className="mt-1.5 rubik-12-regular text-red-500">{error}</span>
        )}
      </div>
    )
  }
)

export default FormInput
