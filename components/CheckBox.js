import { AntDesign } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const CheckBox = ({ onChange, value, label, round = false }) => {
  const styles = useStyles(styleConfig, { round }, { checked: value })

  return (
    <TouchableOpacity style={styles.container} onPress={() => onChange(value ? false : true)}>
      <View style={styles.button}>{value ? <AntDesign name='check' size={styles.icon.size} color={styles.icon.color} /> : null}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styleConfig = {
  base: {
    container: {
      gap: '$spacing-s',
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '$color-border-on-surface',
      '@checked': {
        backgroundColor: '$color-ui-primary',
        borderWidth: 0,
      },
      borderRadius: '$radius-xs',
      borderWidth: 1,
      size: '$font-size-l',
      width: '$size-xs',
      height: '$size-xs',
    },
    icon: {
      color: 'white',
      size: '$font-size-m',
    },
    label: {
      fontSize: '$font-size-xs',
    },
  },
  round: {
    true: {
      button: {
        borderRadius: '$radius-round',
      },
    },
  },
}

export default CheckBox
