import { iconMap } from '../../config/regularIcons'
import { BaseIcon, BaseIconProps } from './BaseIcon'

export const RegularIcon = (props: Omit<BaseIconProps, 'icons'>) => {
  return <BaseIcon {...props} icons={iconMap} />
}
