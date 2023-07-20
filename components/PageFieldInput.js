import { View } from 'react-native'
import Editor from '../../src/components/Editor'
import Field from './Field'
import ImageInput from './ImageInput'
import PdfInput from './PdfInput'
import Select from './Select'
import TextInput from './TextInput'

const getEmbeddedYouTubeUrl = regularUrl => {
  // Regular YouTube URL format: https://www.youtube.com/watch?v=VIDEO_ID
  // and may contain additional parameters after the "v=" parameter (e.g., "&param1=value1&param2=value2")
  const videoId = regularUrl.split('v=')?.[1]?.split('&')?.[0] // Extract the video ID and ignore the additional parameters
  if (!videoId) {
    return regularUrl
  }

  // Construct the embedded YouTube URL
  const embeddedUrl = `https://www.youtube.com/embed/${videoId}`
  return embeddedUrl
}

const PageFieldInput = ({ field }) => {
  const type = field.val.type
  const size = field.val.size
  const value = field.val.value
  const file = field.val.file

  const valueState = {
    val: type === 'image' || type === 'pdf' ? file : value,
    set: val => {
      if (type === 'video') {
        val = getEmbeddedYouTubeUrl(val)
      }

      if (type === 'image' || type === 'pdf') {
        field.set({ ...field.val, file: val })
      } else {
        field.set({ ...field.val, value: val })
      }
    },
  }

  const typeState = {
    val: type,
    set: val => {
      field.set({ type: val })
    },
  }

  const sizeState = {
    val: size,
    set: val => {
      field.set({ ...field.val, size: val })
    },
  }

  if (!size && type === 'image') {
    sizeState.set('medium')
  }

  let element = null

  if (type === 'text') {
    element = <Editor state={valueState} />
  }

  if (type === 'pdf') {
    element = <PdfInput state={valueState} />
  }

  if (type === 'image') {
    element = <ImageInput state={valueState} />
  }

  if (type === 'video') {
    element = <TextInput placeholder='Link' state={valueState} />
  }

  return (
    <Field>
      {type ? (
        <Field fieldChild label='Value'>
          {element}
        </Field>
      ) : null}

      <Field fieldChild>
        <View style={{ flex: 1 }}>
          <Field fieldChild label='Type'>
            <Select state={typeState} options={['text', 'pdf', 'image', 'video']} />
          </Field>

          {type === 'image' ? (
            <Field fieldChild label='Size'>
              <Select state={sizeState} options={['small', 'medium', 'large']} />
            </Field>
          ) : null}
        </View>
      </Field>
    </Field>
  )
}

export default PageFieldInput
