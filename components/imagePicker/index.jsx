import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Img from '../../components/img'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Spinner from '../../components/spinner'
import { gql } from '@apollo/client'
import useMutation from '../../libs/useMutation'

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

  const value = props.state ? props.state.val : data?.file

  /* Trigger image select popup */
  const pickImage = async () => {
    await requestPermission()
    let result = await ImagePicker[props.camera ? 'launchCameraAsync' : 'launchImageLibraryAsync']({
      allowsEditing: true,
      aspect: props.aspect || [4, 4],
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
            const result = await pickImage()
            if (result) {
              let file = null

              if (Platform.OS == 'web') {
                const res = await fetch(result.uri)
                const blob = await res.blob()
                file = blob
              } else {
                file = {
                  uri: result.uri,
                  name: result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length),
                  type: 'image/' + result.uri.substring(result.uri.lastIndexOf('.') + 1),
                }
              }

              createFile.exec({ file })
            }
          }}
        >
          {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
          <MaterialCommunityIcons name='image-plus' size={40} color='white' />
        </Pressable>
      )}
      {value.url ? <Img containerStyle={styles.image} src={value.url} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 7,
    cursor: 'pointer',
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 2,
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
    backgroundColor: 'rgba(0,0,0,0.4)',
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
