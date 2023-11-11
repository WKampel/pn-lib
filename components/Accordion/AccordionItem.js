import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import useStyles from '../../hooks/useStyles'

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  const styles = useStyles(styleConfig)

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.header} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={styles.icon.size} color={styles.icon.color} />
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text style={styles.body}>{body}</Text>
        </View>
      )}
    </View>
  )
}

const styleConfig = {
  base: {
    item: {
      gap: '$spacing-s',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '$font-size-l',
      color: '$color-text-on-surface',
      fontWeight: '$weight-semi-heavy',
    },
    icon: {
      size: '$font-size-l',
      color: '$color-text-on-surface',
    },
    body: {
      paddingLeft: '$spacing-s',
      fontSize: '$font-size-l',
    },
  },
}

export default AccordionItem
