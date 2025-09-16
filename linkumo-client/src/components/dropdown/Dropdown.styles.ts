import type { Position } from '~/types/common.types'

export const styles = {
  box: (isOpen: boolean, scrollable: boolean) => {
    const style = {
      hidden: 'pointer-events-none scale-95 opacity-0',
      open: 'scale-100 opacity-100',
      scroll: `overflow-y-auto `,
      default: `overflow-y-hidden`
    }

    return `${style[isOpen ? 'open' : 'hidden']} ${style[scrollable ? 'scroll' : 'default']}`
  },
  position: {
    bottom: 'top-full mt-2 left-0',
    top: 'bottom-full mb-2 left-0',
    left: 'right-full top-0 mr-2',
    right: 'left-full top-0 ml-2'
  } as Record<Position, string>,
  listItem:
    'cursor-pointer inline-block w-full px-3 py-2 rubik-14-regular text-nowrap hover:bg-primary-50'
}
