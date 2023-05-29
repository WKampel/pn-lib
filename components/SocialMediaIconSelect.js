import IconSelect from './IconSelect'

const SocialMediaIconSelect = props => {
  return (
    <IconSelect
      {...props}
      filter={item => ['facebook-square', 'instagram', 'twitter', 'youtube', 'google', 'tiktok', 'pinterest', 'snapchat'].includes(item.name)}
    />
  )
}

export default SocialMediaIconSelect
