import React from 'react'
import type { TailwindStyles } from '~/types/common.types'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  className?: TailwindStyles
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const errorClass = error ? 'border-red-500' : 'border-primary-100'

    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={props.name} className="mb-2.5 rubik-16-medium">
            {label}
          </label>
        )}
        <textarea
          id={props.name}
          ref={ref}
          {...props}
          className={`resize-none rounded-md border bg-transparent p-4.5 rubik-16-regular text-primary-800 placeholder:text-sm placeholder:text-primary-400 focus:bg-primary-50 focus:outline-none ${errorClass} ${className}`}
        />
        {error && (
          <span className="mt-1.5 rubik-12-regular text-red-500">{error}</span>
        )}
      </div>
    )
  }
)

export default Textarea
