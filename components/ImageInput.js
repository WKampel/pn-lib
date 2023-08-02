import { gql } from '@apollo/client'
import { Feather } from '@expo/vector-icons'
import { ReactNativeFile } from 'apollo-upload-client'
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import { Platform, Pressable, StyleSheet, View } from 'react-native'
import useMutation from '../hooks/useMutation'
import Image from './Image'
import Spinner from './Spinner'

const CREATE_FILE = gql`
  mutation ($file: Upload) {
    createFile(file: $file) {
      id
      url
    }
  }
`

const MAX_WIDTH = 512
const MAX_HEIGHT = 512

export default props => {
  const [cameraPermissionStatus, requestPermission] = ImagePicker.useCameraPermissions()

  const createFile = useMutation(CREATE_FILE, {
    alertError: true,
    onSuccess: data => {
      if (props.state) props.state.set(data.createFile)
      if (props.onChange) props.onChange(data.createFile)
    },
  })

  const value = props.state.val || {}

  /* Trigger image select popup */
  const pickImage = async () => {
    await requestPermission()
    let result = await ImagePicker[props.camera ? 'launchCameraAsync' : 'launchImageLibraryAsync']({
      allowsEditing: false,
    })
    if (!result.canceled) return result.assets[0]
  }

  const compressImage = async (uri, result) => {
    let resize = null
    if (result.width > result.height) {
      if (result.width > MAX_WIDTH) {
        resize = { resize: { width: MAX_WIDTH } }
      }
    } else {
      if (result.height > MAX_HEIGHT) {
        resize = { resize: { height: MAX_HEIGHT } }
      }
    }
    console.log('before')
    const manipResult = await manipulateAsync(
      uri,
      [resize].filter(item => item),
      { compress: 1 }
    )
    console.log('after')

    return manipResult
  }

  return (
    <View style={[styles.container, props.style]}>
      {createFile.loading ? (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      ) : (
        <Pressable
          style={styles.button}
          onPress={async () => {
            let result = await pickImage()
            if (result) {
              let file = null

              const compressedImage = await compressImage(result.uri, result)
              result.uri = compressedImage.uri

              if (props.transformUri) {
                const transformed = await props.transformUri(result.uri, result)
                result.uri = transformed
              }

              if (Platform.OS == 'web') {
                const res = await fetch(result.uri)
                const blob = await res.blob()
                file = blob
              } else {
                file = new ReactNativeFile({
                  uri: result.uri,
                  type: 'image/' + result.uri.substring(result.uri.lastIndexOf('.') + 1),
                  name: result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length),
                })
              }

              createFile.exec({ file })
            }
          }}
        >
          {!value.url ? <Feather name='image' size={40} color='gray' /> : null}
        </Pressable>
      )}
      {value.url ? <Image style={styles.image} src={value.url} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 7,
    cursor: 'pointer',
    borderColor: 'lightgray',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  button: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  spinner: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.75,
  },
  image: {
    flex: 1,
    width: '100%',
  },
})
