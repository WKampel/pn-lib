import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import GET_SMILE_ALBUM from '../../queries/GET_SMILE_ALBUM'
import H from '../components/H'
import Image from '../components/Image'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'

const SmileAlbumScreen = ({ id, data: propData }) => {
  const { data: queryData } = useQuery(GET_SMILE_ALBUM, { id })

  const data = propData || queryData?.smileAlbum || {}

  return (
    <Screen>
      <H>{data.name}</H>
      <Text>{data.desc}</Text>

      <ScrollView style={styles.images}>
        {data.items?.map((item, i) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.beforePhoto?.url} style={styles.image} />
            <Image source={item.afterPhoto?.url} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  images: {
    gap: 15,
  },
  item: {
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 1,
    width: '50%',
  },
})

export default SmileAlbumScreen
