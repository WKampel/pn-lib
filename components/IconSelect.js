import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import useState from '../hooks/useState'
import { dentalset1, dentalset2, dentalset3, dentalset4, dentalset5, dentalset6 } from './DentalIcons'
import Icon from './Icon'
import Select from './Select.web'

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
  entypo: Object.keys(Entypo.glyphMap),
}

export default props => {
  const search = useState('')

  const allIcons = Object.keys(icons)
    ?.flatMap(set => icons[set].map(name => ({ set, name })))
    .filter(item => (props.filter ? props.filter(item) : true))

  const filteredIcons = allIcons.filter(
    item => item.set.toLowerCase().includes(search.val.toLowerCase()) || item.name.toLowerCase().includes(search.val.toLowerCase())
  )

  return (
    <Select
      label={props.label}
      getValue={icon => icon.set + ':' + icon.name}
      getLabel={icon => (
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Icon set={icon.set} name={icon.name} size={20} color='gray' />
          <View>{icon.name}</View>
        </View>
      )}
      state={props.state}
      options={filteredIcons}
    />
  )
}
