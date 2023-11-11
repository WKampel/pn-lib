import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import TouchableCard from './TouchableCard'

const SmileAlbumCard = ({ name, onPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard style={styles.practiceCard} onPress={onPress}>
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
  },
}

export default SmileAlbumCard
