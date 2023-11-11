import BaseIconSelect from './BaseIconSelect'
import RegularIcon from './RegularIcon'

const icons = [
  { set: 'entypo', name: 'youtube' },
  { set: 'entypo', name: 'instagram' },
  { set: 'entypo', name: 'yelp' },
  { set: 'antdesign', name: 'google' },
  { set: 'entypo', name: 'facebook' },
  { set: 'entypo', name: 'share' },
]

const SocialIconSelect = props => {
  return <BaseIconSelect getIcon={props => <RegularIcon {...props} />} icons={icons} {...props} />
}

export default SocialIconSelect
