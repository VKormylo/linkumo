interface BackdropProps {
  isOpen: boolean
  onClick: () => void
  transparent?: boolean
}

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  onClick,
  transparent = false
}) => {
  const openClass = isOpen ? 'block' : 'hidden'
  const backgroundClass = transparent
    ? 'bg-transparent'
    : 'bg-primary-800/15 backdrop-blur-[3px]'

  return (
    <div
      className={`fixed inset-0 z-40 cursor-default ${openClass} ${backgroundClass}`}
      onClick={onClick}
    ></div>
  )
}

export default Backdrop
