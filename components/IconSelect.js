import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './DentalIcons'
import Icon from './Icon'
import TextInput from './TextInput'

export default props => {
  const branding = useBranding()
  const search = useState('')

  const icons = {
    antdesign: Object.keys(AntDesign.glyphMap),
    feather: Object.keys(Feather.glyphMap),
    ionicons: Object.keys(Ionicons.glyphMap),
    materialicons: Object.keys(MaterialIcons.glyphMap),
    dental1: Object.keys(dentalset1),
    dental2: Object.keys(dentalset2),
    dental3: Object.keys(dentalset3),
    dental4: Object.keys(dentalset4),
    dental5: Object.keys(dentalset5),
    dental6: Object.keys(dentalset6),
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => props.state.set(item.set + ':' + item.name)}
        style={[styles.iconContainer, props.state.val === item.set + ':' + item.name ? styles.selected : null]}
      >
        <Icon set={item.set} name={item.name} size={28} color='black' />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 12 }}>{item.set}</Text>
        </View>
      </Pressable>
    )
  }

  const allIcons = Object.keys(icons)
    ?.flatMap(set => icons[set].map(name => ({ set, name })))
    .filter(item => (props.filter ? props.filter(item) : true))

  const filteredIcons = allIcons.filter(
    item => item.set.toLowerCase().includes(search.val.toLowerCase()) || item.name.toLowerCase().includes(search.val.toLowerCase())
  )

  return (
    <View style={[branding.input.style, styles.container]}>
      <FlashList
        estimatedListSize={{ height: 250, width: 880 }}
        estimatedItemSize={50}
        renderItem={renderItem}
        data={filteredIcons}
        keyExtractor={item => item.set + item.name}
        numColumns={2}
      />
      <TextInput style={styles.search} state={search} placeholder='Search' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  iconContainer: {
    height: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
    marginLeft: 15,
  },
  search: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    width: 150,
    opacity: 0.75,
  },
})
