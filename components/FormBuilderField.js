import { StyleSheet, View } from 'react-native'
import FieldTypeSelect from '../../src/components/FieldTypeSelect'
import useModal from '../hooks/useModal'
import Button from './Button'
import Row from './Row'
import TextInput from './TextInput'
import TrashButton from './TrashButton'

const FormBuilderField = ({
  active,
  name,
  type,
  options,
  setActive = () => {},
  setName = () => {},
  setType = () => {},
  setOption = () => {},
  addOption = () => {},
  deleteOption,
  deleteField = () => {},
}) => {
  const addOptionsModal = useModal(() => (
    <>
      {options?.map((option, i) => (
        <Row>
          <TextInput label={`Option ${i}`} state={{ val: option, set: val => setOption(i, val) }} />
          {deleteOption ? <TrashButton onPress={deleteOption.bind(null, i)} /> : null}
        </Row>
      ))}
      <Button text='Add Option' onPress={addOption} />
    </>
  ))

  return (
    <>
      {addOptionsModal.render}
      <Row onMouseEnter={setActive.bind(null, true)} onMouseLeave={setActive.bind(null, false)}>
        <TextInput containerStyle={{ flex: 1 }} label='Prompt' state={{ val: name, set: setName }} />
        <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
          <FieldTypeSelect containerStyle={{ flex: 1 }} label='Type of Answer' state={{ val: type, set: setType }} />
          {['radio', 'dropdown'].includes(type) ? (
            <Button variants={['round', 'secondary', 'narrow']} text='Options' onPress={addOptionsModal.open} />
          ) : null}
          {deleteOption ? <TrashButton onPress={deleteField} style={styles.deleteButton} /> : null}
        </View>
      </Row>
    </>
  )
}

const styles = StyleSheet.create({
  deleteButton: {
    margin: 'auto',
  },
})

export default FormBuilderField
