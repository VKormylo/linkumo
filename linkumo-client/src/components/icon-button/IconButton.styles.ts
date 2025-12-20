import type { Color, Size } from '~/types/common.types'

export const styles = {
  base: (
    outlined: boolean,
    color: Color,
    isToggled: boolean,
    rounded: 'default' | 'full'
  ) => {
    if (!outlined) return ''

    const colorStyles = {
      primary: `border-primary-800 hover:bg-primary-50 ${isToggled ? 'bg-primary-50' : ''}`,
      secondary: `border-primary-100 hover:border-primary-800 ${isToggled ? 'border-primary-800' : ''}`
    } as Record<Color, string>

    const roundedStyles = {
      default: 'rounded-md',
      full: 'rounded-full'
    }

    return `flex items-center justify-center border ${roundedStyles[rounded]} ${colorStyles[color]}`
  },
  size: {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-12.5 h-12.5'
  } as Record<Size, string>
}
