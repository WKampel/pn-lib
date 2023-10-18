import { gql } from '@apollo/client'
import { AntDesign } from '@expo/vector-icons'
import * as DocumentPicker from 'expo-document-picker'
import { Pressable, Text, View } from 'react-native'
import useMutation from '../hooks/useMutation'
import { styled } from '../libs/wakui'
import Pdf from './Pdf'
import Spinner from './Spinner'

const CREATE_FILE = gql`
  mutation ($file: Upload) {
    createFile(file: $file) {
      id
      url
    }
  }
`

const PdfInput = styled('fileInput', ({ label, style, onChange, value = {}, onMouseEnter, onMouseLeave, onPressIn, onPressOut, onFocus, onBlur }) => {
  const createFile = useMutation(CREATE_FILE, {
    alertError: true,
    onSuccess: data => {
      if (onChange) onChange(data.createFile)
    },
  })
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    })
    return result.assets[0]
  }

  const onPress = async () => {
    let result = await pickDocument()
    if (result) {
      let file = null

      if (Platform.OS == 'web') {
        const res = await fetch(result.uri)
        const blob = await res.blob()
        file = blob
      } else {
        file = new ReactNativeFile({
          uri: result.uri,
          type: 'application/pdf',
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
      style={[style, { height: 200, width: 140 }]}
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={onPress}
    >
      {value.url ? <Pdf src={value.url} /> : null}

      <View style={style.labelContainerStyle}>
        {createFile.loading ? (
          <Spinner />
        ) : (
          <>
            <AntDesign name='pdffile1' size={style.iconStyle.fontSize} color={style.labelStyle.color} />
            <Text style={style.labelStyle}>{label}</Text>
          </>
        )}
      </View>
    </Pressable>
  )
})

export default PdfInput
