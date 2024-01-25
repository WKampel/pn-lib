import { MaterialCommunityIcons } from '@expo/vector-icons'

type Gender = 'MALE' | 'FEMALE'

export const GenderIcon = ({ gender, size, color }: { gender: Gender; size: number; color: string }) => {
  return <MaterialCommunityIcons color={color} name={gender === 'FEMALE' ? 'face-woman-profile' : 'face-man-profile'} size={size} />
}
