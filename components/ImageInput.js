import { ReactNativeFile } from 'apollo-upload-client'
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity, View } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useMutation from '../hooks/useMutation'
import usePractice from '../hooks/usePractice'
import useStyles from '../hooks/useStyles'
import CREATE_FILE from '../mutations/CREATE_FILE'
import Button from './Button'
import Image from './Image'
import Spinner from './Spinner'

const MAX_WIDTH = 512
const MAX_HEIGHT = 512

const ImageInput = ({ style, label = 'Upload Image', onChange, value = {}, camera, transformUri }) => {
  const [cameraPermissionStatus, requestPermission] = ImagePicker.useCameraPermissions()

  const practice = usePractice()

  const { hovered, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered })

  // Create file mutation
  const createFile = useMutation(CREATE_FILE, {
    onSuccess: ({ createFile }) => {
      if (onChange) onChange(createFile)
    },
  })

  // Trigger image select popup
  const pickImage = async () => {
    await requestPermission()
    let result = await ImagePicker[camera ? 'launchCameraAsync' : 'launchImageLibraryAsync']({
      allowsEditing: false,
    })
    if (!result.canceled) return result.assets[0]
  }

  // Compress image
  const compressImage = async (uri, result) => {
    const dimension = result.width > result.height ? 'width' : 'height'
    const maxValue = result.width > result.height ? MAX_WIDTH : MAX_HEIGHT
    const resize = result[dimension] > maxValue ? { resize: { [dimension]: maxValue } } : null
    return await manipulateAsync(
      uri,
      [resize].filter(item => item),
      { compress: 1, format: 'png' }
    )
  }

  const onPress = async () => {
    let result = await pickImage()
    if (result) {
      let uri = result.uri

      const compressedImage = await compressImage(uri, result)
      uri = compressedImage.uri

      if (transformUri) {
        const transformed = await transformUri(uri, result)
        uri = transformed
      }

      let file = null

      if (Platform.OS == 'web') {
        const res = await fetch(uri)
        const blob = await res.blob()
        file = blob
      } else {
        file = new ReactNativeFile({
          uri,
          type: 'image/' + uri.substring(uri.lastIndexOf('.') + 1),
          name: uri.substring(uri.lastIndexOf('/') + 1, uri.length),
        })
      }

      createFile.exec({ variables: { file, practiceId: practice.id } })
    }
  }

  return (
    <TouchableOpacity {...interactiveEvents} disabled={createFile.loading} style={[styles.imageInput, style]} onPress={onPress}>
      <View>{createFile.loading ? <Spinner /> : <Button size='s' kind='secondary' text={label} onPress={onPress} />}</View>

      {value?.url && <Image style={styles.image} source={value?.url} />}
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    imageInput: {
      width: 200,
      aspectRatio: 1,
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
      borderStyle: 'dashed',
      padding: '$spacing-s',
      borderRadius: '$radius-s',
      gap: '$spacing-xs',
      '@hovered': {
        borderColor: '$color-border-on-surface-intense',
      },
    },
    image: {
      width: '100%',
      flex: 1,
      borderRadius: '$radius-s',
    },
  },
}

export default ImageInput
