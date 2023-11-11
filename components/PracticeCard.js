import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import Image from './Image'
import TouchableCard from './TouchableCard'

const PracticeCard = ({ name, slogan, children, logoUrl, onPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <TouchableCard style={styles.practiceCard} onPress={onPress} hideBorderOnMobile={false}>
      <Image style={styles.icon} source={logoUrl} />

      <View style={styles.body}>
        <View>
          <Text>{name}</Text>
          <Text>{slogan}</Text>
        </View>
        {children}
      </View>
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
      width: 100,
      height: 100,
      borderRadius: '$radius-m',
    },
    body: {
      gap: '$spacing-s',
    },
  },
}

export default PracticeCard
