import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { CollectionSchema, type Collection } from '~/schemas/collection'

import Button from '~/components/button/Button'
import FormInput from '~/components/form-input/FormInput'
import TagsInput from '~/components/tags-input/TagsInput'
import Textarea from '~/components/textarea/Textarea'

interface CollectionFormProps {
  data?: Collection
  onCancel: () => void
  onSave: (data: Collection) => void
}

const CollectionForm: React.FC<CollectionFormProps> = ({
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
  } = useForm<Collection>({
    resolver: zodResolver(CollectionSchema),
    defaultValues: data
  })

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <FormInput
          label="Add a title:"
          placeholder="Title"
          {...register('title')}
          error={errors.title?.message}
        />
        <Textarea
          label="Add description:"
          placeholder="Description"
          {...register('description')}
          error={errors.description?.message}
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
          Create
        </Button>
      </div>
    </div>
  )
}

export default CollectionForm
