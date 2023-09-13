import Slider from '@react-native-community/slider'
import { SaveFormat, manipulateAsync } from 'expo-image-manipulator'
import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Image, View } from 'react-native'
import useConfirm from '../hooks/useConfirm.js'
import useModal from '../hooks/useModal.js'
import Button from './Button.js'
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
    Image.getSize(uri, async (width, height) => {
      const zoomLevel = width > height ? height / width : width / height

      setZoom(zoomLevel)
    })
    cropModal.open()
    url.current = uri
    await getConfirmation()
    return url.current
  }

  const cropModal = useModal(
    (context, options) => (
      <>
        <Button onPress={options.close} text='Finish' />
        <Slider
          style={{ width: '100%', height: 25 }}
          minimumValue={0.1}
          maximumValue={4}
          onValueChange={setZoom}
          value={zoom}
          minimumTrackTintColor='gray'
          maximumTrackTintColor='#000000'
        />
        <View style={{ width: 500, height: 500 }}>
          <Cropper
            image={url.current}
            crop={crop}
            zoom={zoom}
            minZoom={0.1}
            maxZoom={4}
            restrictPosition={false}
            aspect={props.aspect || 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </View>
      </>
    ),
    {},
    {
      onClose: async () => {
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
