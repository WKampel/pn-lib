import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useStyles from '../../hooks/useStyles'

const PaginationBar = ({ pageCount, page, setPage }) => {
  if (pageCount <= 1) return <></>

  const styles = useStyles(styleConfig)

  return (
    <View>
      <ScrollView style={styles.pageContainer} horizontal={true}>
        {[...Array(parseInt(pageCount))].map((x, i) => (
          <Pressable key={i} onPress={() => setPage(i)}>
            <Text style={[styles.pageItem, i == page ? styles.activePageItem : null]}>{i + 1}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

const styleConfig = {
  base: {
    pageContainer: {
      flexDirection: 'row',
      padding: '$spacing-xs',
      backgroundColor: 'rgb(230,235,240)',
      borderRadius: '$radius-sharp',
      marginTop: '$spacing-xs',
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
    },
    pageItem: {
      padding: '$spacing-xs',
      color: '$color-text-on-surface',
    },
    activePageItem: {
      textDecorationLine: 'underline',
      fontWeight: '$weight-heavy',
    },
  },
}

export default PaginationBar
