import { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import BorderLabel from './BorderLabel'
import TextInput from './TextInput'
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland']

export default props => {
  const { brandingStyles } = useBranding('textInput')
  const isOpen = useState(false)
  const containerRef = useRef()

  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        isOpen.set(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [containerRef])

  function handlePress(e) {
    if (e.keyCode === 9) isOpen.set(false)
  }

  const defaultValue = props.options?.find(option => getValue(option) === props.state.val)

  return (
    <View style={{ flex: 1 }}>
      {props.label && <BorderLabel label={props.label} backgroundColor={brandingStyles.input.backgroundColor} color='gray' />}
      <SelectDropdown
        defaultValue={defaultValue}
        defaultButtonText='Select'
        buttonStyle={[brandingStyles.input, { width: '100%', justifyContent: 'flex-start' }]}
        buttonTextStyle={{ fontSize: brandingStyles.input.fontSize, display: 'flex', justifyContent: 'flex-start', marginLeft: 0, marginRight: 0 }}
        rowStyle={{ opacity: 0.5, paddingVertical: 5, borderBottomWidth: 0 }}
        selectedRowStyle={{ opacity: 1 }}
        rowTextStyle={{ alignItems: 'center', display: 'flex', fontSize: 13 }}
        dropdownStyle={{ borderRadius: 5, overflow: 'hidden' }}
        data={props.options}
        onSelect={option => {
          props.state.set(getValue(option))
        }}
        buttonTextAfterSelection={option => {
          return getLabel(option)
        }}
        rowTextForSelection={option => {
          return getLabel(option)
        }}
      />
    </View>
  )

  return (
    <View style={[styles.container, props.containerStyle]} ref={containerRef}>
      <TextInput
        containerStyle={{ flex: 'unset' }}
        onKeyPress={handlePress}
        onFocus={() => isOpen.set(true)}
        state={{ set: () => {}, val: props.state.val }}
        label={props.label}
        placeholder={props.label || 'Select'}
      />
      {isOpen?.val ? (
        <View style={styles.menu}>
          {props.options?.map(option => {
            const value = getValue(option)
            const label = getLabel(option)

            if (value === props.state.val) return null

            return (
              <TouchableOpacity style={styles.item} activeOpacity={0.5} onPress={() => props.state.set(value)} key={value} label={label}>
                <Text>{getLabel(option)}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    borderRadius: 3,
    overflow: 'scroll',
    position: 'absolute',
    top: '100%',
  },

  item: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})
