import type { TailwindStyles } from '~/types/common.types'
import IconButton from '../icon-button/IconButton'
import Svg from '../svg/Svg'
import CrossIcon from '~/assets/icons/cross.svg?react'

interface TagProps {
  value: string
  className?: TailwindStyles
  onDelete?: () => void
}

const Tag: React.FC<TagProps> = ({ value, onDelete, className = '' }) => {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-full bg-primary-100 px-4 py-1.5 ${className}`}
    >
      <span className="mulish-12-semibold">{value}</span>
      {onDelete && (
        <IconButton
          onClick={onDelete}
          className="rounded-xs p-0.5 hover:bg-primary-200"
        >
          <Svg
            Component={CrossIcon}
            width={12}
            height={12}
            color="text-primary-400"
          />
        </IconButton>
      )}
    </div>
  )
}

export default Tag
