import type { TailwindStyles } from '~/types/common.types'

interface SvgProps {
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color?: string
  width?: number
  height?: number
  className?: TailwindStyles
}

const Svg: React.FC<SvgProps> = ({
  Component,
  color = 'text-primary-800',
  width = 24,
  height = 24,
  className = ''
}) => {
  return (
    <div className={`${className} ${color}`}>
      <Component
        className="transition-all duration-200"
        width={width}
        height={height}
      />
    </div>
  )
}

export default Svg
