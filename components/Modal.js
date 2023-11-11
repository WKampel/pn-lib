import Card from '../components/Card'
import useStyles from '../hooks/useStyles'
import Popup from './Popup'

const Modal = ({ onClose, isOpen, children, style, size = 'm' }) => {
  const styles = useStyles(styleConfig, { size })

  return (
    <Popup onPressBackground={onClose} visible={isOpen}>
      <Card style={[styles, style]}>{children}</Card>
    </Popup>
  )
}

const styleConfig = {
  base: {
    margin: 'auto',
    alignSelf: 'center',
    maxHeight: '100%',
    width: '100%',
  },
  size: {
    m: {
      maxWidth: 400,
    },
    l: {
      maxWidth: 600,
    },
    auto: {
      maxWidth: 'unset',
      width: 'auto',
    },
  },
}

export default Modal
