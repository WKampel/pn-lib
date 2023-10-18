import { gql } from '@apollo/client'
import { Entypo } from '@expo/vector-icons'
import { ReactNativeFile } from 'apollo-upload-client'
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
  'fileInput',
  ({
    style,
    label = 'Upload Image',
    onChange,
    value = {},
    camera,
    onFocus,
    onBlur,
    transformUri,
    onMouseEnter,
    onMouseLeave,
    onPressIn,
    onPressOut,
  }) => {
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
        style={[style, { width: 200, height: 200 }]}
        onFocus={onFocus}
        onBlur={onBlur}
        onPress={onPress}
      >
        {value?.url ? <Image style={{ width: '100%', height: '100%' }} src={value?.url} /> : null}

        <View style={style.labelContainerStyle}>
          {createFile.loading ? (
            <Spinner />
          ) : (
            <>
              <Entypo name='image' size={style.iconStyle.fontSize} color={style.labelStyle.color} />
              <Text style={style.labelStyle}>{label}</Text>
            </>
          )}
        </View>
      </Pressable>
    )
  }
)

export default ImageInput
