import { useState } from 'react'
import { Platform } from 'react-native'
import WebView from '../WebView'

const PageFieldText = ({ value }) => {
  const [webViewHeight, setWebViewHeight] = useState(null)
  const onMessage = event => {
    setWebViewHeight(Number(event.nativeEvent.data))
  }
  const injectedJavaScript = `window.ReactNativeWebView.postMessage(document.body.scrollHeight)`

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
        style={{ width: '100%', height: webViewHeight, backgroundColor: 'transparent' }}
        source={{ html: value }}
        onMessage={onMessage}
        injectedJavaScript={injectedJavaScript}
        scrollEnabled={false}
      />
    )
  }
}

export default PageFieldText
