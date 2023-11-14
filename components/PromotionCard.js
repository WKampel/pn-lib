import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import Image from './Image'
import TouchableCard from './TouchableCard'

const PromotionCard = ({ name, imageUrl, onPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard hideBorderOnMobile={false} style={styles.practiceCard} onPress={onPress}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableCard>
  )
}

const styleConfig = {
  base: {
    practiceCard: {
      flexDirection: 'row',
    },
    image: {
      width: 100,
      height: 100,
    },
    name: {
      fontSize: '$font-size-m',
      flex: 1,
    },
  },
}

export default PromotionCard
