import Icon from './Icon'

const GenderIcon = ({ gender, size }) => {
  if (['female', 'f'].includes(gender?.toLowerCase())) gender = 'f'

  return <Icon set='materialcommunityicons' name={gender === 'f' ? 'face-woman-profile' : 'face-man-profile'} size={size} />
}

export default GenderIcon
