import { SaveFormat, manipulateAsync } from 'expo-image-manipulator'
import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Image, Text, View } from 'react-native'
import useConfirm from '../hooks/useConfirm.js'
import Button from './Button.js'
import Group from './Group.js'
import ImageInput from './ImageInput.js'
import Modal from './Modal.js'
import Slider from './Slider.js'

const MIN_ZOOM = 0.1
const MAX_ZOOM = 4

// This should stay as a export default since it's .web.js. I want the IDE autocomplete pulling in the regular ImageInput.js not ImageInputu.web.js
export default props => {
  const { confirm, getConfirmation } = useConfirm()

  const url = useRef()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [pixels, setPixels] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setPixels(croppedAreaPixels)
  }, [])

  const closeModal = async () => {
    setModalOpen(false)

    const result = await manipulateAsync(
      url.current,
      [
        {
          crop: {
            width: pixels.width,
            height: pixels.height,
            originX: pixels.x,
            originY: pixels.y,
          },
        },
      ],
      { compress: 1, format: SaveFormat.PNG }
    )

    url.current = result.uri

    confirm()
  }

  const transformUri = async uri => {
    Image.getSize(uri, async (width, height) => {
      const zoomLevel = width > height ? height / width : width / height
      setZoom(zoomLevel)
    })
    setModalOpen(true)
    url.current = uri
    await getConfirmation()
    return url.current
  }

  return (
    <>
      <Modal size='auto' isOpen={modalOpen} onClose={closeModal}>
        <Group x>
          <Button onPress={closeModal} text='Finish' />
          <Group style={{ flex: 1 }}>
            <Text>Zoom</Text>
            <Slider style={{ flex: 1, height: 25 }} min={MIN_ZOOM} max={MAX_ZOOM} onChange={setZoom} value={zoom} />
          </Group>
        </Group>
        <View style={{ width: 500, height: 500 }}>
          <Cropper
            image={url.current}
            crop={crop}
            zoom={zoom}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            restrictPosition={false}
            aspect={props.aspect || 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </View>
      </Modal>
      <ImageInput transformUri={transformUri} {...props} state={props.state} />
    </>
  )
}
