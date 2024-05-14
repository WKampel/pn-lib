// @ts-ignore
import { ReactNativeFile } from 'apollo-upload-client'
import * as ImagePicker from 'expo-image-picker'
import { ActivityIndicator, Platform, TouchableOpacity, View } from 'react-native'
import { CreateFileMutation, CreateFileMutationVariables } from '../../../../gql/graphql'
import { CreateFile } from '../../../mutations/CreateFileMutation'
import { usePracticeMutation } from '../../hooks/usePracticeMutation'
import { useTheme } from '../../hooks/useTheme'
import { compressImage } from '../../utils/compressImage'
import { Image } from '../Image'
import { SolidButton } from '../buttons/SolidButton'
import { ImageInputProps } from './index'

const ImageInput = ({ style, label = 'Upload Image', onChange, value, camera, transformUri }: ImageInputProps) => {
  const [_, requestPermission] = ImagePicker.useCameraPermissions()
  const { tokens } = useTheme()

  // Create file mutation
  const createFile = usePracticeMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFile, {
    variables: {
      file: null,
    },
    onSuccess: ({ createFile }) => {
      if (onChange) onChange(createFile)
    },
  })

  // Trigger image select popup
  const pickImage = async (): Promise<ImagePicker.ImagePickerAsset | undefined> => {
    await requestPermission()
    let result = await ImagePicker[camera ? 'launchCameraAsync' : 'launchImageLibraryAsync']({
      allowsEditing: false,
    })
    if (!result.canceled) return result.assets[0]
  }

  const onPress = async () => {
    let result = await pickImage()
    if (result) {
      let uri = result.uri

      const compressedImage = await compressImage({ uri, width: result.width, height: result.height })
      uri = compressedImage.uri

      if (transformUri) {
        const transformed = await transformUri(uri)
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

      createFile.exec({ variables: { file } })
    }
  }

  return (
    <TouchableOpacity
      disabled={createFile.loading}
      style={[
        {
          width: 200,
          aspectRatio: 1,
          borderWidth: 1,
          borderColor: tokens.color_border_on_surface_semi_intense,
          borderStyle: 'dashed',
          padding: tokens.spacing_s,
          borderRadius: tokens.radius_s,
          gap: tokens.spacing_xs,
        },
        style,
      ]}
      onPress={onPress}
    >
      <View style={{ margin: 'auto' }}>
        {createFile.loading ? <ActivityIndicator animating={true} /> : <SolidButton size='s' variant='secondary' text={label} onPress={onPress} />}
      </View>

      {value?.url && (
        <Image
          style={{
            width: '100%',
            flex: 1,
            borderRadius: tokens.radius_s,
          }}
          source={value?.url}
        />
      )}
    </TouchableOpacity>
  )
}

export default ImageInput
