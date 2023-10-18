import { Platform } from 'react-native'
import useState from '../hooks/useState'
import ImageAutoHeight from './ImageAutoHeight'
import Pdf from './Pdf'
import WebView from './WebView'

const PageFieldDisplay = ({ field }) => {
  const webViewHeight = useState(null)
  const onMessage = event => {
    webViewHeight.set(Number(event.nativeEvent.data))
  }
  const injectedJavaScript = `window.ReactNativeWebView.postMessage(document.body.scrollHeight)`

  const type = field.type
  const size = field.size
  const align = field.align
  const value = field.value
  const file = field.file

  function getImageWidth() {
    if (size === 'small') return '50%'
    if (size === 'medium') return '75%'
    return '100%'
  }

  function getImageAlignment() {
    if (align === 'left') return 'flex-start'
    if (align === 'right') return 'flex-end'
    return 'center'
  }

  if (type === 'text') {
    if (Platform.OS === 'web') {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: value,
          }}
        />
      )
    } else {
      return (
        <WebView
          style={{ width: '100%', height: webViewHeight.val, backgroundColor: 'transparent' }}
          source={{ html: value }}
          onMessage={onMessage}
          injectedJavaScript={injectedJavaScript}
          scrollEnabled={false}
        />
      )
    }
  }

  if (type === 'pdf') {
    return <Pdf src={file?.url} />
  }

  if (type === 'image') {
    return (
      <ImageAutoHeight
        style={{
          width: getImageWidth(),
          alignSelf: getImageAlignment(),
        }}
        src={file?.url}
      />
    )
  }

  if (type === 'video') {
    return <WebView source={{ uri: value }} style={{ width: '100%', aspectRatio: 1.78 }} />
  }
}

export default PageFieldDisplay
