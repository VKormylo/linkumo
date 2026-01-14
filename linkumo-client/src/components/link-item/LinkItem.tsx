import { useState } from 'react'

import Dropdown from '~/components/dropdown/Dropdown'
import ExternalLink from '~/components/external-link/ExternalLink'
import IconButton from '~/components/icon-button/IconButton'
import Svg from '~/components/svg/Svg'
import Tag from '~/components/tag/Tag'

import ArrowDownIcon from '~/assets/icons/arrow-down.svg?react'
import DotsIcon from '~/assets/icons/dots.svg?react'
import HeartIcon from '~/assets/icons/heart.svg?react'

interface LinkItemProps {
  url: string
  title: string
  tags: string[]
  isFavorited: boolean
}

const LinkItem: React.FC<LinkItemProps> = ({
  url,
  title,
  tags,
  isFavorited
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavorited)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [isTagsDropdownOpen, setIsTagsDropdownOpen] = useState(false)

  const dropdownItems = [
    { label: 'Copy link', onClick: () => {} },
    { label: 'Remove', onClick: () => {} },
    { label: 'Move to', onClick: () => {} },
    { label: 'Change', onClick: () => {} }
  ]

  const tagsDropdownItems = tags.map((tag) => ({
    label: tag
  }))

  const urlDomain = url.split('/')[2]

  return (
    <div className="flex h-[90px] w-full rounded-sm border border-primary-100">
      <div className="h-full w-[167px] shrink-0 border-r border-primary-100">
        <div className="h-full w-full bg-primary-50"></div>
      </div>
      <div className="flex w-full items-center justify-between px-4.5 py-4">
        <div className="flex flex-col gap-y-3">
          <h4 className="rubik-16-medium">{title}</h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag} value={tag} />
              ))}
            </div>
            <Dropdown
              isOpen={isTagsDropdownOpen}
              setIsOpen={setIsTagsDropdownOpen}
              items={tagsDropdownItems}
              position="right"
              trigger={
                <IconButton
                  onClick={() => {}}
                  color="primary"
                  outlined
                  size="small"
                  rounded="full"
                >
                  <Svg Component={ArrowDownIcon} width={8} height={12} />
                </IconButton>
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-6">
            <IconButton onClick={() => setIsFavorite((prev) => !prev)}>
              <Svg
                Component={HeartIcon}
                width={22}
                height={22}
                filled={isFavorite}
                className="hover:text-primary-600"
              />
            </IconButton>
            <Dropdown
              isOpen={isMoreDropdownOpen}
              setIsOpen={setIsMoreDropdownOpen}
              items={dropdownItems}
              trigger={
                <IconButton onClick={() => {}}>
                  <Svg
                    Component={DotsIcon}
                    width={22}
                    height={22}
                    color="text-primary-800"
                    className="hover:text-primary-600"
                  />
                </IconButton>
              }
            />
          </div>
          <ExternalLink url={url} openInNewTab>
            {urlDomain}
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}

export default LinkItem
