import { gql } from '@apollo/client'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ReactNativeFile } from 'apollo-upload-client'
import * as ImagePicker from 'expo-image-picker'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
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
      allowsEditing: true,
      aspect: props.aspect || [4, 4],
      allowsEditing: true,
    })
    if (!result.canceled) return result.assets[0]
  }

  return (
    <View style={styles.container}>
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

              if (props.transformUri) {
                const transformed = await props.transformUri(result.uri)
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
          {props.label && !value.url ? <Text style={styles.label}>{props.label}</Text> : null}
          {!value.url ? <MaterialCommunityIcons name='image-plus' size={40} color='gray' /> : null}
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
    backgroundColor: 'rgb(230, 230, 240)',
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 7,
    cursor: 'pointer',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
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
  label: {
    fontWeight: 'bold',
    color: 'white',
  },
})
