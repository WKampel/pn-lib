import React from 'react'
import { ScrollView, View } from 'react-native'
import PageFieldDisplay from './PageFieldDisplay'

const CustomPage = ({ fields }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {fields?.map(field => (
          <PageFieldDisplay field={field} />
        ))}
      </View>
    </ScrollView>
  )
}

export default CustomPage
