import { View } from 'react-native'
import { webStyles } from '../../pn-lib/libs/utils'
import Popup from '../components/Popup'
import Section from '../components/Section'
import useState from './useState'

const useModal = (jsx, containerStyle, options = {}) => {
  const open = useState(false)
  const context = useState(null)

  const openModal = _context => {
    context.set(_context)
    open.set(true)
    console.log('open')
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

  function getVAlignStyle() {
    if (!options?.vAlign) {
      return { margin: 'auto' }
    } else if (options?.vAlign === 'bottom') {
      return { marginTop: 'auto' }
    }
  }

  return {
    render: (
      <Popup onPressBackground={closeModal} visible={open.val}>
        <View style={[webStyles({ maxHeight: '75%' }), getVAlignStyle()]}>
          <Section scroll={options.scroll} style={containerStyle}>
            {typeof jsx === 'function' ? jsx(context.val, { close: closeModal }) : jsx}
          </Section>
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
