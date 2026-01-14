import { useState } from 'react'

import Button from '~/components/button/Button'
import Dropdown from '~/components/dropdown/Dropdown'
import ExternalLink from '~/components/external-link/ExternalLink'
import IconButton from '~/components/icon-button/IconButton'
import Svg from '~/components/svg/Svg'
import Tag from '~/components/tag/Tag'

import ArrowDownIcon from '~/assets/icons/arrow-down.svg?react'
import DotsIcon from '~/assets/icons/dots.svg?react'
import HeartIcon from '~/assets/icons/heart.svg?react'

interface LinkCardProps {
  url: string
  title: string
  tags: string[]
  isFavorited: boolean
}

const LinkCard: React.FC<LinkCardProps> = ({
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
    <div className="flex w-[280px] flex-col rounded-lg border border-primary-100">
      <div className="h-[140px] w-full border-b border-primary-100 bg-primary-50"></div>
      <div className="flex flex-col px-4.5 pt-2.5 pb-5">
        <div className="mb-2.5 flex items-center justify-between">
          <ExternalLink url={url} openInNewTab>
            {urlDomain}
          </ExternalLink>
          <Dropdown
            isOpen={isMoreDropdownOpen}
            setIsOpen={setIsMoreDropdownOpen}
            items={dropdownItems}
            trigger={
              <IconButton onClick={() => {}}>
                <Svg
                  Component={DotsIcon}
                  width={20}
                  height={20}
                  color="text-primary-500"
                  className="hover:text-primary-800"
                />
              </IconButton>
            }
          />
        </div>
        <p className="rubik-16-medium">{title}</p>
        <div className="mt-3.5 mb-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag} value={tag} />
            ))}
          </div>
          <Dropdown
            isOpen={isTagsDropdownOpen}
            setIsOpen={setIsTagsDropdownOpen}
            items={tagsDropdownItems}
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
        <div className="flex items-center justify-between gap-4.5">
          <Button url={url} stretch>
            Open
          </Button>
          <IconButton onClick={() => setIsFavorite((prev) => !prev)}>
            <Svg
              Component={HeartIcon}
              width={26}
              height={26}
              filled={isFavorite}
              className="hover:text-primary-600"
            />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default LinkCard
