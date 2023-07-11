import { ScrollView, StyleSheet, View } from 'react-native'
import Popup from '../components/Popup'
import useState from './useState'

const useModal = (jsx, containerStyle, options = {}) => {
  const open = useState(false)
  const context = useState(null)

  const openModal = _context => {
    context.set(_context)
    open.set(true)
  }

  const closeModal = () => {
    context.set(null)
    open.set(false)
    if (options.onClose) options.onClose()
  }

  const toggleModal = () => {
    if (open.val) {
      openModal()
    } else {
      closeModal()
    }
  }

  return {
    render: (
      <Popup onPressBackground={closeModal} visible={open.val}>
        <View style={[styles.box, containerStyle]}>
          <ScrollView>{typeof jsx === 'function' ? jsx(context.val, { close: closeModal }) : jsx}</ScrollView>
        </View>
      </Popup>
    ),
    open: openModal,
    close: closeModal,
    toggle: toggleModal,
    isOpen: open.val,
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    minWidth: 300,
    maxHeight: '85%',
    padding: 20,
    borderRadius: 10,
    margin: 'auto',
    overflow: 'hidden',
  },
})

export default useModal
