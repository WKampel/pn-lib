import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import DentalIcon from './DentalIcon'
import TouchableCard from './TouchableCard'

const ServiceCard = ({ name, icon, onPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard style={styles.practiceCard} onPress={onPress}>
      <DentalIcon identifier={icon} size={styles.icon.size} />
      <Text>{name}</Text>
    </TouchableCard>
  )
}

const styleConfig = {
  base: {
    practiceCard: {
      flexDirection: 'row',
      gap: '$spacing-l',
    },
    icon: {
      size: 25,
    },
  },
}

export default ServiceCard
