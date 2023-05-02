import Popup from '../../components/popup'
import useState from '../useState'
import { StyleSheet, View, ScrollView } from 'react-native'

const useModal = jsx => {
  const open = useState(false)
  const context = useState(null)

  const openModal = _context => {
    context.set(_context)
    open.set(true)
  }

  const closeModal = () => {
    context.set(null)
    open.set(false)
  }

  const toggleModal = () => {
    if (open.val) {
      oepnModal()
    } else {
      closeModal()
    }
  }

  return {
    render: (
      <Popup onPressBackground={() => open.set(false)} visible={open.val}>
        <View style={styles.box}>
          <ScrollView>{typeof jsx === 'function' ? jsx(context.val) : jsx}</ScrollView>
        </View>
      </Popup>
    ),
    open: openModal,
    close: closeModal,
    toggle: toggleModal,
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    minWidth: 300,
    maxHeight: '75%',
    padding: 20,
    borderRadius: 10,
    margin: 'auto',
    overflow: 'hidden',
  },
})

export default useModal
