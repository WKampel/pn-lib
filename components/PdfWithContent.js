import React from 'react'
import { StyleSheet, View } from 'react-native'
import WebView from './WebView'

const PdfWithContent = props => {
  // JavaScript code to append the user-generated HTML content to the WebView
  const injectJavaScript = `
    document.body.insertAdjacentHTML('afterbegin', '${props.content}');
  `
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: props.src || '', method: 'get' }}
        style={styles.webview}
        injectedJavaScript={injectJavaScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
})

export default PdfWithContent
