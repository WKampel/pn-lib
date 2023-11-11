import { MaterialCommunityIcons } from '@expo/vector-icons'
const GenderIcon = ({ gender, size, color }) => {
  if (['female', 'f'].includes(gender?.toLowerCase())) gender = 'f'

  return <MaterialCommunityIcons color={color} name={gender === 'f' ? 'face-woman-profile' : 'face-man-profile'} size={size} />
}

export default GenderIcon
