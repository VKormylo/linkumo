import type { Size, Variant } from '~/types/common.types'

export const buttonStyles = {
  base: (stretch: boolean) =>
    `rounded-md text-center transition-colors duration-300 cursor-pointer inline-flex items-center justify-center gap-3 ${stretch ? 'w-full' : ''}`,
  size: {
    small: 'rubik-14-regular p-4',
    medium: 'rubik-16-medium py-4 px-14'
  } as Record<Size, string>,
  primary: {
    filled: 'bg-primary-800 text-white hover:bg-primary-600',
    outlined:
      'border-primary-800 text-primary-800 hover:text-white hover:bg-primary-800 border box-border'
  } as Record<Variant, string>,
  secondary: {
    outlined:
      'border-primary-400 text-primary-400 hover:border-primary-500 hover:text-primary-500 hover:bg-primary-100 border box-border'
  } as Record<Variant, string>,
  tertiary: {
    outlined: 'border-primary-100 border box-border hover:border-primary-800'
  } as Record<Variant, string>
}
