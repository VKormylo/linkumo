import type React from 'react'
import type { Color, Size, Variant } from '~/types/common.types'
import { buttonStyles } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  variant?: Variant
  size?: Size
  stretch?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'filled',
  size = 'medium',
  stretch = false,
  className = '',
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${buttonStyles.base(stretch)} ${buttonStyles.size[size]} ${buttonStyles[color][variant]} ${className}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  )
}

export default Button
