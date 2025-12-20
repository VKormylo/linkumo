import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LinkSchema, type Link } from '~/schemas/link'
import Button from '~/components/button/Button'
import FormInput from '~/components/form-input/FormInput'
import TagsInput from '~/components/tags-input/TagsInput'
import Textarea from '~/components/textarea/Textarea'

interface LinkFormProps {
  type: 'create' | 'edit'
  data?: Link
  onCancel: () => void
  onSave: (data: Link) => void
}

const LinkForm: React.FC<LinkFormProps> = ({
  type,
  data,
  onCancel,
  onSave
}) => {
  const { tags: currentTags } = data || {}
  const [tags, setTags] = useState(currentTags || [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Link>({
    resolver: zodResolver(LinkSchema),
    defaultValues: data
  })

  const buttonText = type === 'create' ? 'Create' : 'Save'

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <FormInput
          label="Paste a link:"
          placeholder="Link"
          {...register('link')}
          error={errors.link?.message}
        />
        <Textarea
          label="Add title:"
          placeholder="Title"
          {...register('title')}
          error={errors.title?.message}
        />
        <TagsInput tags={tags} setTags={setTags} />
      </div>
      <div className="mt-7 flex justify-between gap-5.5">
        <Button
          type="button"
          onClick={() => {
            reset()
            onCancel()
          }}
          color="secondary"
          variant="outlined"
          className="w-[190px]"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit((data) => onSave(data))}
          color="primary"
          variant="filled"
          className="flex-1"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default LinkForm
