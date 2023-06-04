import { gql } from '@apollo/client'
import { AntDesign } from '@expo/vector-icons'
import { ReactNativeFile } from 'apollo-upload-client'
import * as DocumentPicker from 'expo-document-picker'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import useMutation from '../hooks/useMutation'
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

const PdfInput = props => {
  const createFile = useMutation(CREATE_FILE, {
    alertError: true,
    onSuccess: data => {
      if (props.state) props.state.set(data.createFile)
      if (props.onChange) props.onChange(data.createFile)
    },
  })

  const value = props.state.val || {}

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    })
    return result
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
            let result = await pickDocument()
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
                  type: 'application/pdf',
                  name: result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length),
                })
              }

              createFile.exec({ file })
            }
          }}
        >
          {props.label && !value.url ? <Text style={styles.label}>{props.label}</Text> : null}
          {!value.url ? <AntDesign name='pdffile1' size={40} color='gray' /> : null}
        </Pressable>
      )}
      {value.url ? <Pdf src={value.url} style={styles.pdf} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    width: 200,
    height: 280,
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
  label: {
    fontWeight: 'bold',
    color: 'white',
  },
})

export default PdfInput
