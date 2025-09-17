import type { Color } from '~/types/common.types'

export const styles = (outlined: boolean, color: Color, isToggled: boolean) => {
  if (!outlined) return ''

  const colorStyles = {
    primary: `border-primary-800 hover:bg-primary-50 ${isToggled ? 'bg-primary-50' : ''}`,
    secondary: `border-primary-100 hover:border-primary-800 ${isToggled ? 'border-primary-800' : ''}`
  } as Record<Color, string>

  return `border p-3 rounded-md ${colorStyles[color]}`
}
