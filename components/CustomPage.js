import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import PageFieldDisplay from './PageFieldDisplay'

const CustomPage = ({ fields }) => {
  return (
    <ScrollView>
      {fields.map(field => (
        <PageFieldDisplay field={field} />
      ))}
    </ScrollView>
  )
}

export default CustomPage
