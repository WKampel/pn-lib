import WebView from './WebView'

const Pdf = props => {
  return <WebView style={{ width: '100%', aspectRatio: 0.7 }} source={{ uri: props.src }} />
}

export default Pdf
