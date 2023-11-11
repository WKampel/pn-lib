import WebView from './WebView'

const Pdf = ({ src }) => {
  return <WebView style={{ width: '100%', aspectRatio: 0.7 }} source={{ uri: src }} />
}

export default Pdf
