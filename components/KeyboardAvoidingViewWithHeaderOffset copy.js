import { useHeaderHeight } from '@react-navigation/elements'
import KeyboardAvoidingView from './KeyboardAvoidingView'

const KeyboardAvoidingViewWithHeaderOffset = props => {
  const headerHeight = useHeaderHeight()
  return <KeyboardAvoidingView keyboardVerticalOffset={headerHeight}>{props.children}</KeyboardAvoidingView>
}

export default KeyboardAvoidingViewWithHeaderOffset
