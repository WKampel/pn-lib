import { SaveFormat, manipulateAsync } from 'expo-image-manipulator'
import { useCallback, useRef, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { Image, View } from 'react-native'
import { useConfirm } from '../../hooks/useConfirm.ts'
import { useTheme } from '../../hooks/useTheme.ts'
import { Modal } from '../Modal.tsx'
import { Slider } from '../Slider.tsx'
import { SolidButton } from '../buttons/SolidButton.tsx'
import { ImageInputProps } from './index'
import BaseImageInput from './native.tsx'

const MIN_ZOOM = 0.1
const MAX_ZOOM = 4

// This should stay as a export default since it's .web.js. I want the IDE autocomplete pulling in the regular ImageInput.js not ImageInputu.web.js
const ImageInput = (props: ImageInputProps) => {
  const { confirm, getConfirmation } = useConfirm()
  const url = useRef<string>()

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [pixels, setPixels] = useState<Area>()
  const [modalOpen, setModalOpen] = useState(false)

  const { tokens } = useTheme()

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setPixels(croppedAreaPixels)
  }, [])

  const closeModal = async () => {
    setModalOpen(false)

    if (pixels && url.current) {
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
    }

    confirm()
  }

  const transformUri = async (uri: string): Promise<string> => {
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
      <Modal autoWidth isOpen={modalOpen} onClose={closeModal}>
        <View style={{ gap: tokens.spacing_m }}>
          <View style={{ flexDirection: 'row', gap: tokens.spacing_m, alignItems: 'center' }}>
            <Slider style={{ flex: 1, height: 25 }} min={MIN_ZOOM} max={MAX_ZOOM} onChange={setZoom} value={zoom} />
            <SolidButton variant='primary' onPress={closeModal} text='Finish' />
          </View>
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
        </View>
      </Modal>
      <BaseImageInput transformUri={transformUri} {...props} />
    </>
  )
}

export default ImageInput
