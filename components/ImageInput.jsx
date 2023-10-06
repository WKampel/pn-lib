import { gql } from '@apollo/client'
import { AntDesign } from '@expo/vector-icons'
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useMutation from '../hooks/useMutation'
import { styled } from '../libs/wakui'
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

const ImageInput = styled(
  'imageInput',
  ({ style, label, onChange, value, camera, onFocus, onBlur, transformUri, onMouseEnter, onMouseLeave, onPressIn, onPressOut }) => {
    const [cameraPermissionStatus, requestPermission] = ImagePicker.useCameraPermissions()

    const createFile = useMutation(CREATE_FILE, {
      displayError: true,
      onSuccess: data => {
        if (onChange) onChange(data.createFile)
      },
    })

    /* Trigger image select popup */
    const pickImage = async () => {
      await requestPermission()
      let result = await ImagePicker[camera ? 'launchCameraAsync' : 'launchImageLibraryAsync']({
        allowsEditing: false,
      })
      if (!result.canceled) return result.assets[0]
    }

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
        let file = null

        const compressedImage = await compressImage(result.uri, result)
        result.uri = compressedImage.uri

        if (transformUri) {
          const transformed = await transformUri(result.uri, result)
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
    }

    return (
      <Pressable
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={createFile.loading}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        onPress={onPress}
      >
        {createFile.loading ? (
          <Spinner />
        ) : (
          <View style={style.labelContainerStyle}>
            <AntDesign name='cloudupload' size={style.labelStyle.fontSize} color={style.labelStyle.color} />
            {label && <Text style={style.labelStyle}>{label}</Text>}
          </View>
        )}
        {value.url ? <Image style={style.imageStyle} src={value.url} /> : null}
      </Pressable>
    )
  }
)

export default ImageInput
