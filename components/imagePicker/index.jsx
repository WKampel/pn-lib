import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import filesAPI from '../../api/files'
import * as ImagePicker from 'expo-image-picker'
import useAPI from '../../useAPI'
import Button from '../../button'
import * as FileSystem from 'expo-file-system'
import { useContext } from 'react'
import { Image } from 'expo-image'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Spinner from '../../spinner'

export default props => {
  const [cameraPermissionStatus, requestPermission] = ImagePicker.useCameraPermissions()

  /* Upload Image to API */
  const { data, status, exec } = useAPI(filesAPI.createOne.bind(filesAPI), { autoExec: false, onSuccess: () => props.onChange(data.file) })

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
      {status === 'loading' ? (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      ) : (
        <Pressable
          style={styles.button}
          onPress={async () => {
            const result = await pickImage()
            if (result) {
              const formData = new FormData()

              if (Platform.OS == 'web') {
                const res = await fetch(result.uri)
                const blob = await res.blob()
                formData.append('file', blob)
              } else {
                formData.append('file', {
                  uri: result.uri,
                  name: result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length),
                  type: 'image/' + result.uri.substring(result.uri.lastIndexOf('.') + 1),
                })
              }

              exec(formData)
            }
          }}
        >
          <MaterialCommunityIcons name='image-plus' size={50} color='black' />
        </Pressable>
      )}
      <Image style={styles.image} source={{ uri: data?.file?.url || props.value?.url }} contentFit='contain' transition={1000} />
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
    opacity: 0.5,
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
    opacity: 0.5,
  },
  image: {
    flex: 1,
    width: '100%',
  },
})

// const getBlobFromUri = async uri => {
//   const blob = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.onload = () => resolve(xhr.response)
//     xhr.onerror = e => reject(new TypeError('Network request failed'))
//     xhr.responseType = 'blob'
//     xhr.open('GET', uri, true)
//     xhr.send(null)
//   })
//   return blob
// }

// const uploadResult = await FileSystem.uploadAsync('http://192.168.1.36:3050/backend/files', result.uri, {
//   httpMethod: 'POST',
//   uploadType: FileSystem.FileSystemUploadType.MULTIPART,
//   fieldName: 'file',
//   headers: {
//     Authorization:
//       'Bearer ' +
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InBhdGllbnQiLCJpYXQiOjE2ODE1OTEwMDYsImV4cCI6MTY4MTY3NzQwNn0.UId2mgJIFnxifqrbV33NdeUJJ-8SnY5PRQ1AWgAj3vA',
//   },
// })
// alert(uploadResult)

// await fetch('http://192.168.1.36:3050/backend/files', {
//   method: 'post',
//   body: formData,
//   headers: {
//     Authorization:
//       'Bearer ' +
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InBhdGllbnQiLCJpYXQiOjE2ODE1OTEwMDYsImV4cCI6MTY4MTY3NzQwNn0.UId2mgJIFnxifqrbV33NdeUJJ-8SnY5PRQ1AWgAj3vA',
//   },
// })
//   .then(response => {
//     // alert('worked')
//   })
//   .catch(err => {
//     console.log('err:', err)
//   })
