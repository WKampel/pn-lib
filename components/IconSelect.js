import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useState from '../hooks/useState'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './DentalIcons'
import Icon from './Icon'
import TextInput from './TextInput'

const icons = {
  antdesign: Object.keys(AntDesign.glyphMap),
  feather: Object.keys(Feather.glyphMap),
  ionicons: Object.keys(Ionicons.glyphMap),
  materialicons: Object.keys(MaterialIcons.glyphMap),
  materialcommunityicons: Object.keys(MaterialCommunityIcons.glyphMap),
  dental1: Object.keys(dentalset1),
  dental2: Object.keys(dentalset2),
  dental3: Object.keys(dentalset3),
  dental4: Object.keys(dentalset4),
  dental5: Object.keys(dentalset5),
  dental6: Object.keys(dentalset6),
}

export default props => {
  const branding = useBranding()
  const search = useState('')
  const focused = useIsFocused()

  if (!focused) return <View></View> //This reset scroll position when navigating away from page and returning. Also fixes a bug in which navigating away from page and returning causes layout to become 1 col instead of 2. Seems to improve performance as well

  const renderItem = ({ item }) => {
    return <Item onPress={() => props.state.set(item.set + ':' + item.name)} set={item.set} name={item.name} />
  }
  const allIcons = Object.keys(icons)
    ?.flatMap(set => icons[set].map(name => ({ set, name })))
    .filter(item => (props.filter ? props.filter(item) : true))

  const filteredIcons = allIcons.filter(
    item => item.set.toLowerCase().includes(search.val.toLowerCase()) || item.name.toLowerCase().includes(search.val.toLowerCase())
  )

  return (
    <View style={[branding.input.style, styles.container]}>
      <View style={styles.header}>
        <Item style={styles.selectedIcon} onPress={() => {}} set={props.state.val?.split(':')?.[0]} name={props.state.val?.split(':')?.[1]} />
        <TextInput style={styles.search} state={search} placeholder='Search' />
      </View>
      <FlashList estimatedItemSize={50} renderItem={renderItem} data={filteredIcons} keyExtractor={item => item.set + item.name} numColumns={2} />
    </View>
  )
}

const Item = ({ set, name, onPress, style }) => (
  <Pressable onPress={onPress} style={[styles.iconContainer, style]}>
    <Icon set={set} name={name} size={20} color='gray' />
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 12 }}>{set}</Text>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    flex: 'unset',
  },
  iconContainer: {
    height: 40,
    padding: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  search: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  selectedIcon: {
    flex: 1,
  },
})
