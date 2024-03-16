// @ts-ignore
import { ReactNativeFile } from 'apollo-upload-client'
import * as DocumentPicker from 'expo-document-picker'
import { ActivityIndicator, Platform, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { CreateFileMutation, CreateFileMutationVariables } from '../../../gql/graphql'
import { CreateFile } from '../../mutations/CreateFileMutation'
import { usePracticeMutation } from '../hooks/usePracticeMutation'
import { useTheme } from '../hooks/useTheme'
import { FileState } from '../types/FileState'
import { Pdf } from './Pdf'
import { SolidButton } from './buttons/SolidButton'

export type PdfInputProps = {
  style?: StyleProp<ViewStyle>
  label?: string
  onChange?: (file: any) => void
  value?: FileState | null
}

export const PdfInput = ({ style, label = 'Upload Pdf', onChange, value }: PdfInputProps) => {
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

  const pickDocument = async (): Promise<DocumentPicker.DocumentPickerAsset | undefined> => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    })
    if (!result.canceled) return result.assets[0]
  }

  const onPress = async () => {
    let result = await pickDocument()
    if (result) {
      const uri = result.uri
      let file = null

      if (Platform.OS == 'web') {
        const res = await fetch(uri)
        const blob = await res.blob()
        file = blob
      } else {
        file = new ReactNativeFile({
          uri,
          type: 'application/pdf',
          name: result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length),
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
          borderWidth: 1.5,
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
        <View style={{ aspectRatio: 0.7 }}>
          <Pdf
            style={{
              width: '100%',
              height: '100%',
            }}
            src={value?.url}
          />
        </View>
      )}
    </TouchableOpacity>
  )
}
