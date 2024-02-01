import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Image, ImageProps } from './Image'
import { Modal } from './Modal'

export const PopupImage = (props: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => setIsOpen(true)}>
        <Image {...props} />
      </TouchableOpacity>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Image {...props} style={{ width: 500, height: 500, alignSelf: 'center' }} />
      </Modal>
    </View>
  )
}
