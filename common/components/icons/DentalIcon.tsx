import { iconMap } from '../../config/dentalIcons'
import { BaseIcon, BaseIconProps } from './BaseIcon'

export const DentalIcon = (props: Omit<BaseIconProps, 'icons'>) => {
  return <BaseIcon {...props} icons={iconMap} />
}
