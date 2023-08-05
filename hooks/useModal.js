import { ScrollView, View } from 'react-native'
import Popup from '../components/Popup'
import Section from '../components/Section'
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
        <View style={{ margin: 'auto', maxHeight: '75%' }}>
          <ScrollView>
            <Section style={containerStyle}>{typeof jsx === 'function' ? jsx(context.val, { close: closeModal }) : jsx}</Section>
          </ScrollView>
        </View>
      </Popup>
    ),
    open: openModal,
    close: closeModal,
    toggle: toggleModal,
    isOpen: open.val,
  }
}

export default useModal
