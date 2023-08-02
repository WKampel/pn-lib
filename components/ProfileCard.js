import { Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'

const ProfileCard = props => {
  const branding = useBranding()
  return (
    <View style={[branding?.profileCard.style, props.style]}>
      {props.title ? <Text style={branding?.profileCard.title.style}>{props.title}</Text> : null}

      {props.children}

      {props.rows?.map((row, i) => {
        return (
          <Text key={i} style={branding?.profileCard.subtitle.style}>
            {row}
          </Text>
        )
      })}
    </View>
  )
}

export default ProfileCard
