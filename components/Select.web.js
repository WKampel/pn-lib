import { FlashList } from '@shopify/flash-list'
import { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Overlay } from '../contexts/Overlay'
import useState from '../hooks/useState'
import TextInput from './TextInput'

export default props => {
  const isOpen = useState(false)
  const containerRef = useRef()

  const getLabel = option => (props.getLabel && props.getLabel(option)) || (option && option.label) || option
  const getValue = option => (props.getValue && props.getValue(option)) || (option && option.value) || option

  const renderOption = ({ item: option }) => {
    const value = getValue(option)
    const label = getLabel(option)

    if (value === props.state.val) return null

    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.5} onPress={() => props.state.set(value)} key={value} label={label}>
        <Text>{getLabel(option)}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={[styles.container, props.containerStyle]} ref={containerRef}>
      <TextInput
        containerStyle={{ flex: 'unset' }}
        onFocus={e => isOpen.set(true)}
        state={{ set: () => {}, val: props.state.val }}
        label={props.label}
        placeholder={props.label || 'Select'}
      />
      <Overlay
        visible={isOpen.val}
        relativeToRef={containerRef}
        close={() => {
          isOpen.set(false)
        }}
      >
        <View style={styles.menu}>
          <FlashList keyExtractor={option => getValue(option)} data={props?.options} estimatedItemSize={30} renderItem={renderOption} />
        </View>
      </Overlay>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    width: 350,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    borderRadius: 3,
    overflow: 'scroll',
  },

  item: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})
