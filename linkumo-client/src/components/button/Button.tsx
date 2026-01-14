import React from 'react'

import type { Color, Size, Variant } from '~/types/common.types'

import { buttonStyles } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  variant?: Variant
  size?: Size
  url?: string
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
  url,
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  const buttonClass = `${buttonStyles.base(stretch)} ${buttonStyles.size[size]} ${buttonStyles[color][variant]} ${className}`

  const buttonContent = (
    <>
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </>
  )

  return (
    <>
      {url ? (
        <a className={buttonClass} href={url}>
          {buttonContent}
        </a>
      ) : (
        <button {...props} className={buttonClass}>
          {buttonContent}
        </button>
      )}
    </>
  )
}

export default Button
