import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import DentalIcon from './DentalIcon'
import TouchableCard from './TouchableCard'

const ServiceCard = ({ name, icon, onPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard hideBorderOnMobile={false} style={styles.practiceCard} onPress={onPress}>
      <DentalIcon identifier={icon} size={styles.icon.size} />
      <Text style={styles.name}>{name}</Text>
    </TouchableCard>
  )
}

const styleConfig = {
  base: {
    practiceCard: {
      flexDirection: 'row',
      gap: '$spacing-l',
      alignItems: 'center',
    },
    icon: {
      size: '$size-m',
    },
    name: {
      fontSize: '$font-size-m',
    },
  },
}

export default ServiceCard
