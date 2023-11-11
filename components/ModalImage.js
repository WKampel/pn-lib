import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Image from './Image'
import Modal from './Modal'

const ModalImage = ({ source, style }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Modal size='auto' isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Image
          style={{
            width: 500,
            height: 500,
          }}
          source={source}
        />
      </Modal>
      <TouchableOpacity style={style} onPress={() => setModalOpen(true)}>
        <Image style={{ width: '100%', height: '100%' }} source={source} />
      </TouchableOpacity>
    </>
  )
}

export default ModalImage
