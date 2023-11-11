import { View } from 'react-native'
import fieldComponentMap from '../../config/formRenderer/fieldComponentMap'
import fieldTypes from '../../config/formRenderer/fieldTypes'

const FormRendererField = ({ config = {}, value, onChange }) => {
  const { type, ...otherConfig } = config
  const InputComponent = config.type === fieldTypes.CUSTOM ? config.component : fieldComponentMap[type]

  if (!InputComponent) {
    console.warn(`No input component found for type ${type}`)
    return null
  }

  return (
    <View style={{ flex: 1 }}>
      <InputComponent value={value} onChange={onChange} {...otherConfig} />
    </View>
  )
}

export default FormRendererField
