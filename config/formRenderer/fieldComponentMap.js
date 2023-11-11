import ColorPicker from '../../components/ColorPicker'
import ImageInput from '../../components/ImageInput'
import TextInput from '../../components/TextInput'
import fieldTypes from './fieldTypes'

const fieldComponentMap = {
  [fieldTypes.TEXT_INPUT]: TextInput,
  [fieldTypes.COLOR_PICKER]: ColorPicker,
  [fieldTypes.IMAGE_INPUT]: ImageInput,
}

export default fieldComponentMap
