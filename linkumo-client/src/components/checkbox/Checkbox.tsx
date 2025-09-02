import CheckIcon from '~/assets/icons/check.svg?react'
import type { TailwindStyles } from '~/types/common.types'

interface CheckboxProps {
  name: string
  label: string
  checked?: boolean
  className?: TailwindStyles
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked = false,
  className = '',
  onChange
}) => {
  return (
    <label
      className={`flex cursor-pointer items-center self-start ${className}`}
    >
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        defaultChecked={checked}
        className="peer hidden"
      />
      <div className="relative inline-block h-5 w-5 rounded-xs border-2 border-primary-800 transition-all peer-checked:border-primary-800 peer-checked:bg-primary-800">
        <CheckIcon className="absolute top-1/2 left-1/2 h-[10px] w-[12px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="pl-3 rubik-14-regular">{label}</span>
    </label>
  )
}

export default Checkbox
