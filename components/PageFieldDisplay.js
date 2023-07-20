import ImageAutoHeight from './ImageAutoHeight'
import Pdf from './Pdf'
import WebView from './WebView'

const PageFieldDisplay = ({ field }) => {
  const type = field.type
  const size = field.size
  const value = field.value
  const file = field.file

  function getImageWidth() {
    if (size === 'small') return '50%'
    if (size === 'medium') return '75%'
    return '100%'
  }

  if (type === 'text') {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: value,
        }}
      />
    )
  }

  if (type === 'pdf') {
    return <Pdf src={file?.url} />
  }

  if (type === 'image') {
    return (
      <ImageAutoHeight
        style={{
          width: getImageWidth(),
        }}
        src={file?.url}
      />
    )
  }

  if (type === 'video') {
    return <WebView source={{ uri: value }} style={{ flex: 1 }} />
  }
}

export default PageFieldDisplay
