import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
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

export default ({ filter, label, onChange, value, ...other }) => {
  const allIcons = Object.keys(icons)
    ?.flatMap(set => icons[set].map(name => ({ set, name })))
    .filter(item => (filter ? filter(item) : true))
    .sort((a, b) => a.name?.localeCompare(b.name))

  return (
    <Select
      {...other}
      label={label}
      getValue={icon => icon.set + ':' + icon.name}
      getLabel={icon => (
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Icon set={icon.set} name={icon.name} size={20} color='gray' />
          <Text>{icon.name}</Text>
        </View>
      )}
      onChange={onChange}
      value={value}
      options={allIcons}
    />
  )
}
