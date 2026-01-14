import type { Color, Size, TailwindStyles } from '~/types/common.types'

import { styles } from './IconButton.styles'

interface BaseProps {
  onClick: () => void
  rounded?: 'default' | 'full'
  className?: TailwindStyles
  children: React.ReactNode
}

type IconButtonProps =
  | (BaseProps & {
      outlined: true
      color?: Color
      size?: Size
      isToggled?: boolean
    })
  | (BaseProps & {
      outlined?: false
      color?: never
      size?: never
      isToggled?: never
    })

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  size,
  rounded = 'default',
  color = 'primary',
  outlined = false,
  isToggled = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center transition-all duration-200 ${styles.base(outlined, color, isToggled, rounded)} ${size ? styles.size[size] : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export default IconButton
