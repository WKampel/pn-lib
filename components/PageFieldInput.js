import { View } from 'react-native'
import Editor from '../../src/components/Editor'
import ImageInput from './ImageInput'
import PdfInput from './PdfInput'
import Row from './Row'
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
  const align = field.val.align
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
      field.set({ type: val, size: 'medium', align: 'center' })
    },
  }

  const sizeState = {
    val: size,
    set: val => {
      field.set({ ...field.val, size: val })
    },
  }

  const alignState = {
    val: align,
    set: val => {
      field.set({ ...field.val, align: val })
    },
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
    element = <TextInput label='Link' state={valueState} />
  }

  return (
    <Row>
      {type ? <View style={{ flex: 1 }}>{element}</View> : null}

      <View style={{ flex: 1, gap: 10 }}>
        <Row>
          <Select label='Type' state={typeState} options={['text', 'pdf', 'image', 'video']} />
        </Row>

        {type === 'image' ? (
          <Row>
            <Select label='Size' state={sizeState} options={['small', 'medium', 'large']} />
            <Select label='Align' state={alignState} options={['left', 'center', 'right']} />
          </Row>
        ) : null}
      </View>
    </Row>
  )
}

export default PageFieldInput
