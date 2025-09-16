export const styles = {
  box: {
    color: {
      primary: 'text-primary-800 border-primary-100 hover:border-primary-400'
    },
    size: {
      medium: 'rubik-16-regular p-4 border rounded-md'
    },
    open: (isOpen: boolean) =>
      isOpen ? 'outline-primary-500 outline-1' : 'border-primary-100'
  },
  options: (isOpen: boolean) => {
    const style = {
      base: 'pointer-events-none scale-0',
      open: 'pointer-events-auto scale-100'
    }

    return style[isOpen ? 'open' : 'base']
  }
}
