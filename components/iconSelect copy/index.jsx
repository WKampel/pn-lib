import React, { useContext } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import Img from '../img'
import { gql } from '@apollo/client'
import useQuery from '../../libs/useQuery'
import { Context } from '../../contexts/style'
import { ScrollView } from 'react-native-gesture-handler'

const GET_ICONS = gql`
  query {
    icons {
      id
      name
      file {
        url
      }
    }
  }
`

export default props => {
  const { data } = useQuery(GET_ICONS)
  const style = useContext(Context)

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.icons}>
        {data?.icons?.map(icon => (
          <Pressable
            key={icon.id}
            onPress={() => props.state.set(icon)}
            style={[styles.iconContainer, ...(props.state.val?.id === icon.id ? [styles.selected, { borderColor: style.primaryColor }] : [])]}
          >
            <Img containerStyle={styles.icon} src={icon.file.url} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 175,
    backgroundColor: 'rgb(230, 230, 240)',
    borderColor: 'rgb(200, 200, 220)',
    borderWidth: 1,
    borderRadius: 10,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  selected: {
    backgroundColor: 'white',
  },
})
