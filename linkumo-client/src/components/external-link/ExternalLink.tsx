import type { PropsWithChildren } from 'react'

interface ExternalLinkProps extends PropsWithChildren {
  url: string
  openInNewTab?: boolean
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  openInNewTab = false,
  children
}) => {
  return (
    <a
      className="rubik-12-regular"
      href={url}
      target={openInNewTab ? '_blank' : '_self'}
    >
      {children}
    </a>
  )
}

export default ExternalLink
