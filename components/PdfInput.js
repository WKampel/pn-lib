import { ReactNativeFile } from 'apollo-upload-client'
import * as DocumentPicker from 'expo-document-picker'
import { TouchableOpacity, View } from 'react-native'
import useInteractive from '../hooks/useInteractive'
import useMutation from '../hooks/useMutation'
import useStyles from '../hooks/useStyles'
import CREATE_FILE from '../mutations/CREATE_FILE'
import Button from './Button'
import Pdf from './Pdf'
import Spinner from './Spinner'

const PdfInput = ({ label = 'Upload Pdf', onChange, value = {} }) => {
  const { hovered, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered })

  // Create file mutation
  const createFile = useMutation(CREATE_FILE, {
    onSuccess: ({ createFile }) => {
      if (onChange) onChange(createFile)
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

      createFile.exec({ variables: { file } })
    }
  }

  return (
    <TouchableOpacity {...interactiveEvents} disabled={createFile.loading} style={styles.pdfInput} onPress={onPress}>
      <View>{createFile.loading ? <Spinner /> : <Button size='s' kind='secondary' text={label} onPress={onPress} />}</View>

      {value.url ? <Pdf src={value.url} /> : null}
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    pdfInput: {
      width: 200,
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
      aspectRatio: 1,
      borderRadius: '$radius-s',
    },
  },
}

export default PdfInput
