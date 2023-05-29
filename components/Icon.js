import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { DentalSet1, DentalSet2, DentalSet3, DentalSet4, DentalSet5, DentalSet6 } from './DentalIcons'

const Icon = props => {
  let set = props.set
  let name = props.name
  if (props.val) {
    set = props.val.split(':')[0]
    name = props.val.split(':')[1]
  }
  if (set === 'ionicons') {
    return <Ionicons name={name} size={props.size} color={props.color} />
  } else if (set === 'antdesign') {
    return <AntDesign name={name} size={props.size} color={props.color} />
  } else if (set === 'feather') {
    return <Feather name={name} size={props.size} color={props.color} />
  } else if (set === 'materialicons') {
    return <MaterialIcons name={name} size={props.size} color={props.color} />
  } else if (set === 'dental1') {
    return <DentalSet1 name={name} size={props.size} />
  } else if (set === 'dental2') {
    return <DentalSet2 name={name} size={props.size} />
  } else if (set === 'dental3') {
    return <DentalSet3 name={name} size={props.size} />
  } else if (set === 'dental4') {
    return <DentalSet4 name={name} size={props.size} />
  } else if (set === 'dental5') {
    return <DentalSet5 name={name} size={props.size} />
  } else if (set === 'dental6') {
    return <DentalSet6 name={name} size={props.size} />
  }
}

export default Icon
