import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Image from './Image'

const PracticeCard = ({ id, name, slogan, logoUrl, onPress, primaryColor = 'black', children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { color: primaryColor }]}>
      {logoUrl ? <Image style={styles.logo} src={logoUrl} /> : <View style={styles.logo} />}
      <View style={{ gap: 5, paddingTop: 10, flex: 1 }}>
        <Text style={[styles.name, { color: primaryColor }]}>{name}</Text>
        <Text style={styles.slogan}>{slogan}</Text>

        {children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 150,
    gap: 15,
    paddingRight: 10,
    flex: 1,
  },
  logo: {
    height: '100%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  slogan: {},
})

export default PracticeCard
