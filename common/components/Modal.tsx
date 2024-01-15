import { View } from 'react-native'
import { Popup } from './Popup'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  autoWidth?: boolean
}

export const Modal = ({ onClose, isOpen, children, autoWidth }: ModalProps) => {
  return (
    <Popup onPressBackground={onClose} visible={isOpen}>
      <View
        style={[
          {
            margin: 'auto',
            alignSelf: 'center',
            maxHeight: '100%',
            width: autoWidth ? 'auto' : '100%',
            maxWidth: autoWidth ? undefined : 500,
          },
        ]}
      >
        {children}
      </View>
    </Popup>
  )
}
