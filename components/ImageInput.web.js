import { SaveFormat, manipulateAsync } from 'expo-image-manipulator'
import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { View } from 'react-native'
import useConfirm from '../hooks/useConfirm.js'
import useModal from '../hooks/useModal.js'
import ImageInput from './ImageInput.js'

export default props => {
  const { confirm, getConfirmation } = useConfirm()

  const url = useRef()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [pixels, setPixels] = useState({})

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setPixels(croppedAreaPixels)
  }, [])

  const transformUri = async uri => {
    cropModal.open()
    url.current = uri
    await getConfirmation()
    return url.current
  }

  const cropModal = useModal(
    <View style={{ width: 500, height: 500 }}>
      <Cropper
        image={url.current}
        crop={crop}
        zoom={zoom}
        aspect={props.aspect || 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </View>,
    {},
    {
      onClose: async () => {
        const result = await manipulateAsync(
          url.current,
          [
            {
              crop: {
                height: pixels.height,
                originX: pixels.x,
                originY: pixels.y,
                width: pixels.width,
              },
            },
          ],
          { compress: 1, format: SaveFormat.PNG }
        )

        url.current = result.uri

        confirm()
      },
    }
  )

  return (
    <>
      {cropModal.render}
      <ImageInput transformUri={transformUri} {...props} state={props.state} />
    </>
  )
}
