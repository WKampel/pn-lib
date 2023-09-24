import moment from 'moment'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'
import { useBranding } from '../contexts/Branding'
import GenderIcon from './GenderIcon'
import Icon from './Icon'

const ProfileCard = ({ name, gender, email, birthDay, phone, address, children }) => {
  const { colors } = useBranding()
  return (
    <View style={styles.card}>
      <GenderIcon size={50} gender={gender} />
      <View style={styles.infoContainer}>
        <Title style={{ color: colors.primary }} text={name} />
        <Info iconSet='materialicons' iconName='email' value={email} />
        <Info iconSet='materialicons' iconName='phone' value={phone} />
        <Info iconSet='materialicons' iconName='cake' value={moment(birthDay).format('MMM DD, YYYY')} />
        <Info iconSet='materialicons' iconName='location-pin' value={address} />

        {children}
      </View>
    </View>
  )
}

const Info = ({ iconName, iconSet, value }) => {
  return (
    <View style={styles.info}>
      <Icon set={iconSet} name={iconName} size={13} />
      <Text style={{ fontSize: 13 }}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    gap: 10,
    fontSize: 20,
  },
  infoContainer: {
    gap: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    fontSize: 13,
  },
})

export default ProfileCard
