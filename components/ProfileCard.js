import { Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

const ProfileCard = props => {
  const branding = useBranding()
  return (
    <View style={branding.profileCard.style}>
      <Text style={branding.profileCard.title.style}>{props.title}</Text>

      {props.rows.map((row, i) => {
        return (
          <Text key={i} style={branding.profileCard.subtitle.style}>
            {row}
          </Text>
        )
      })}
    </View>
  )
}

export default ProfileCard
