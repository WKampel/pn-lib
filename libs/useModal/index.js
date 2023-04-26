import Popup from '../../components/popup'
import useState from '../useState'
import { StyleSheet, View } from 'react-native'

const useModal = jsx => {
  const open = useState(false)

  return {
    render: (
      <Popup onPressBackground={() => open.set(false)} visible={open.val}>
        <View style={styles.box}>{jsx}</View>
      </Popup>
    ),
    open,
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    minWidth: 300,
    padding: 20,
    borderRadius: 10,
    margin: 'auto',
  },
})

export default useModal
