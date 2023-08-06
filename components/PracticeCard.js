import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Image from './Image'

const PracticeCard = ({ id, name, slogan, logoUrl, onPress, primaryColor = 'black' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { color: primaryColor }]}>
      {logoUrl ? <Image style={styles.logo} src={logoUrl} /> : <View style={styles.logo} />}
      <Text style={[styles.name, { color: primaryColor }]}>{name}</Text>
      <Text style={styles.slogan}>{slogan}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    alignItems: 'center',
    textAlign: 'center',
    gap: 10,
    width: 150,
    overflow: 'hidden',
    backgroundColor: 'rgb(240,245,250)',
    paddingBottom: 10,
  },
  logo: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: 'bold',
  },
})

export default PracticeCard
