import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import H from '../components/H'
import Image from '../components/Image'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_SMILE_ALBUM from '../queries/GET_SMILE_ALBUM'

const SmileAlbumScreen = ({ id, data: propData }) => {
  const { data: queryData } = useQuery(GET_SMILE_ALBUM, { variables: { id } })
  const data = propData || queryData?.smileAlbum || {}

  return (
    <Screen>
      <Card scroll style={{ flexGrow: 1 }}>
        <H>{data.name}</H>
        <Text>{data.desc}</Text>

        {data.items?.map((item, i) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.beforePhoto?.url} style={styles.image} />
            <Image source={item.afterPhoto?.url} style={styles.image} />
          </View>
        ))}
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  image: {
    aspectRatio: 1,
    width: '50%',
  },
})

export default SmileAlbumScreen
