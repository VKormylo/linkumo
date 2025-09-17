import type { Color, TailwindStyles } from '~/types/common.types'
import { styles } from './IconButton.styles'

interface BaseProps {
  onClick: () => void
  className?: TailwindStyles
  children: React.ReactNode
}

type IconButtonProps =
  | (BaseProps & {
      outlined: true
      color?: Color
      isToggled?: boolean
    })
  | (BaseProps & {
      outlined?: false
      color?: never
      isToggled?: never
    })

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  color = 'primary',
  outlined = false,
  isToggled = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center transition-all duration-200 ${styles(outlined, color, isToggled)} ${className}`}
    >
      {children}
    </button>
  )
}

export default IconButton
