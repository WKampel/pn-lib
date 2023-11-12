import { MaterialIcons } from '@expo/vector-icons'
import moment from 'moment'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import Card from './Card'
import GenderIcon from './GenderIcon'

const ProfileCard = ({ name, gender, email, birthDay, phone, address, children }) => {
  const styles = useStyles(styleConfig)

  return (
    <Card style={styles.profileCard} hideBorderOnMobile={false}>
      <GenderIcon gender={gender} size={50} color='black' />

      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>

        <Info iconName='email' value={email} />
        <Info iconName='phone' value={phone} />
        <Info iconName='cake' value={moment(birthDay).format('MMM DD, YYYY')} />
        <Info iconName='location-pin' value={address} />
        {children}
      </View>
    </Card>
  )
}

const Info = ({ iconName, value }) => {
  const styles = useStyles(styleConfig)
  return (
    <View style={styles.info}>
      <MaterialIcons name={iconName} color={styles.infoText.color} size={styles.infoText.fontSize} />
      <Text style={styles.infoText}>{value}</Text>
    </View>
  )
}

const styleConfig = {
  base: {
    name: {
      color: '$color-ui-primary',
      fontSize: '$font-size-m',
    },
    profileCard: {
      flexDirection: 'row',
      gap: '$spacing-l',
    },
    body: {
      gap: '$spacing-s',
      flex: 1,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '$spacing-xs',
    },
    infoText: {
      color: '$color-text-on-surface',
      fontSize: '$font-size-s',
    },
  },
}

export default ProfileCard
