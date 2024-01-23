import { View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { Popup } from './Popup'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  autoWidth?: boolean
}

export const Modal = ({ onClose, isOpen, children, autoWidth }: ModalProps) => {
  const tokens = useTheme()
  return (
    <Popup onPressBackground={onClose} visible={isOpen}>
      <View
        style={{
          margin: 'auto',
          alignSelf: 'center',
          maxHeight: '100%',
          width: autoWidth ? 'auto' : '100%',
          maxWidth: autoWidth ? undefined : 500,
          backgroundColor: 'white',
          padding: tokens.spacing_l,
          borderRadius: tokens.radius_l,
        }}
      >
        {children}
      </View>
    </Popup>
  )
}
