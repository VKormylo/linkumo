import Backdrop from '../backdrop/Backdrop'
import IconButton from '../icon-button/IconButton'
import Svg from '../svg/Svg'
import CrossIcon from '~/assets/icons/cross.svg?react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  width?: number
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  width = 540,
  children
}) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'}`}>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <div
        className="absolute top-1/2 left-1/2 z-50 -translate-1/2 rounded-lg border border-primary-100 bg-white px-6 py-5"
        style={{ width }}
      >
        <div className="mb-4.5 flex items-center justify-between">
          <h3 className="rubik-18-medium">{title}</h3>
          <IconButton onClick={onClose}>
            <Svg
              Component={CrossIcon}
              width={20}
              height={20}
              className="hover:text-primary-500"
            />
          </IconButton>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
