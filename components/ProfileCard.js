import { View } from 'react-native'
import Title from '../components/Title'
import { useBranding } from '../contexts/Branding'

const ProfileCard = props => {
  const { colors } = useBranding()
  return (
    <View style={[{ backgroundColor: colors.primary, borderRadius: 10, padding: 15 }]}>
      {props.title ? <Title style={{ color: 'white' }} text={props.title} /> : null}
      {props.children}
    </View>
  )
}

export default ProfileCard
