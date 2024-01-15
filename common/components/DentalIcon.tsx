import { DentalSet1, DentalSet2, DentalSet3, DentalSet4, DentalSet5, DentalSet6 } from './DentalIcons'
import { IconBase, IconBaseProps } from './IconBase'

const iconSets = {
  dental1: DentalSet1,
  dental2: DentalSet2,
  dental3: DentalSet3,
  dental4: DentalSet4,
  dental5: DentalSet5,
  dental6: DentalSet6,
}

type DentalIconProps = IconBaseProps & {
  identifier?: string
}

export const DentalIcon = ({ identifier = '', set: setProp, name: nameProp, style, size, color }: DentalIconProps) => {
  const [set, name] = identifier.split(':')
  return <IconBase iconSets={iconSets} set={set || setProp} name={name || nameProp} style={style} size={size} color={color} />
}
