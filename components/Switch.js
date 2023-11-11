import { Switch as ReactNativeSwitch, Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const Switch = ({ label, onChange, value }) => {
  const styles = useStyles(styleConfig, {}, { activated: value })

  return (
    <View style={styles.container}>
      <ReactNativeSwitch
        thumbColor={styles.thumb.color}
        trackColor={styles.track.color}
        style={styles.switch}
        onValueChange={onChange}
        value={value}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styleConfig = {
  base: {
    container: {
      flexDirection: 'row',
      gap: '$spacing-s',
    },
    switch: {},
    thumb: {},
    track: {
      color: '$color-ui-secondary',
    },
    label: {},
  },
}

export default Switch
