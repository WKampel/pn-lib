import React from 'react'
import TextInput from './TextInput'

const getEmbeddedYouTubeUrl = regularUrl => {
  let videoId

  // Regular YouTube URL format: https://www.youtube.com/watch?v=VIDEO_ID
  if (regularUrl.includes('youtube.com')) {
    videoId = regularUrl.split('v=')?.[1]?.split('&')?.[0]
  }

  // Short YouTube URL format: https://youtu.be/VIDEO_ID
  else if (regularUrl.includes('youtu.be')) {
    videoId = regularUrl.split('youtu.be/')?.[1]?.split('?')?.[0]
  }

  if (!videoId) {
    return regularUrl
  }

  // Construct the embedded YouTube URL
  const embeddedUrl = `https://www.youtube.com/embed/${videoId}`
  console.log('embeddedUrl:', embeddedUrl)
  return embeddedUrl
}

const VideoUrlTextInput = props => {
  const onChange = val => {
    val = getEmbeddedYouTubeUrl(val)
    if (props.onChange) props.onChange(val)
  }

  return <TextInput {...props} onChange={onChange} />
}

export default VideoUrlTextInput
