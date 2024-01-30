import { MaterialCommunityIcons } from '@expo/vector-icons'
import { IconProps } from '../types/IconProps'

type Gender = 'MALE' | 'FEMALE'

export const GenderIcon = ({ gender, size, color }: { gender: Gender } & IconProps) => {
  return <MaterialCommunityIcons color={color} name={gender === 'FEMALE' ? 'face-woman-profile' : 'face-man-profile'} size={size} />
}
