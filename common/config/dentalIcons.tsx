import { DentalSet1, DentalSet2, DentalSet3, DentalSet4, DentalSet5, DentalSet6 } from '../components/icons/DentalSets'
import { IconList } from '../types/IconList'
import { IconMap } from '../types/IconMap'
import { iconMapToList } from '../utils/iconMapToList'

export const iconMap: IconMap = {
  ...Object.keys(DentalSet1).reduce((acc, name) => ({ ...acc, [`dentalset1:${name}`]: { name, icon: <DentalSet1 name={name as keyof typeof DentalSet1} size={24} /> } }), {}),
  ...Object.keys(DentalSet2).reduce((acc, name) => ({ ...acc, [`dentalset2:${name}`]: { name, icon: <DentalSet2 name={name as keyof typeof DentalSet2} size={24} /> } }), {}),
  ...Object.keys(DentalSet3).reduce((acc, name) => ({ ...acc, [`dentalset3:${name}`]: { name, icon: <DentalSet3 name={name as keyof typeof DentalSet3} size={24} /> } }), {}),
  ...Object.keys(DentalSet4).reduce((acc, name) => ({ ...acc, [`dentalset4:${name}`]: { name, icon: <DentalSet4 name={name as keyof typeof DentalSet4} size={24} /> } }), {}),
  ...Object.keys(DentalSet5).reduce((acc, name) => ({ ...acc, [`dentalset5:${name}`]: { name, icon: <DentalSet5 name={name as keyof typeof DentalSet5} size={24} /> } }), {}),
  ...Object.keys(DentalSet6).reduce((acc, name) => ({ ...acc, [`dentalset6:${name}`]: { name, icon: <DentalSet6 name={name as keyof typeof DentalSet6} size={24} /> } }), {}),
}

export const iconList: IconList[] = iconMapToList(iconMap)
