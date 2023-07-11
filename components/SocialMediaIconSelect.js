import IconSelect from './IconSelect'

const SocialMediaIconSelect = props => {
  return (
    <IconSelect
      {...props}
      filter={item => {
        return [
          { set: 'entypo', name: 'youtube' },
          { set: 'entypo', name: 'instagram' },
          { set: 'entypo', name: 'yelp' },
          { set: 'antdesign', name: 'google' },
          { set: 'entypo', name: 'facebook' },
          { set: 'entypo', name: 'share' },
        ].find(_item => _item.set === item.set && _item.name === item.name)
      }}
    />
  )
}

export default SocialMediaIconSelect
