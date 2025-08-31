import type React from 'react'

type ButtonVariant = 'primary' | 'primary-outlined' | 'secondary-outlined'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  startIcon,
  endIcon,
  ...props
}) => {
  let baseStyles =
    'rounded-md text-center rubik-16-medium p-4 transition-colors duration-200 cursor-pointer inline-flex items-center justify-center gap-3 h-[50px]'

  let variantStyles = ''

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-primary-800 text-white hover:bg-primary-600'
      break
    case 'primary-outlined':
      variantStyles =
        'border-primary-800 text-primary-800 hover:border-primary-500 hover:text-primary-500 hover:bg-primary-100 border box-border'
      break
    case 'secondary-outlined':
      variantStyles =
        'border-primary-400 text-primary-400 hover:border-primary-500 hover:text-primary-500 hover:bg-primary-100 border box-border'
      break
  }

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  )
}

export default Button
