import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styled } from '../libs/wakui'

const Spinner = styled('spinner', ({ style }) => {
  return (
    <View>
      <ActivityIndicator color={style.color} />
    </View>
  )
})

export default Spinner
