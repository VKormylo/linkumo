import type React from 'react'
import LinkCard from '~/components/link-card/LinkCard'
import LinkItem from '~/components/link-item/LinkItem'

interface Link {
  url: string
  title: string
  tags: string[]
  isFavorite: boolean
}

type ItemsView = 'list' | 'grid'

interface LinksContainerProps {
  links: Link[]
  view: ItemsView
}

const LinksContainer: React.FC<LinksContainerProps> = ({ links, view }) => {
  const styles = {
    list: 'flex flex-col justify-between gap-3.5',
    grid: 'grid grid-cols-5 gap-5'
  }

  const renderLink = (link: Link) => {
    if (view === 'list') {
      return (
        <LinkItem
          key={link.title}
          url={link.url}
          title={link.title}
          tags={link.tags}
          isFavorited={link.isFavorite}
        />
      )
    }

    if (view === 'grid') {
      return (
        <LinkCard
          key={link.title}
          url={link.url}
          title={link.title}
          tags={link.tags}
          isFavorited={link.isFavorite}
        />
      )
    }
  }

  return (
    <div className={styles[view]}>
      {links.map((link: Link) => renderLink(link))}
    </div>
  )
}

export default LinksContainer
