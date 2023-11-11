import React from 'react'
import { Text } from 'react-native'
import Button from './Button'

const SaveChangesButton = ({ modified, ...other }) => {
  if (!modified) return <Text>All changes saved.</Text>
  return <Button text='Save' {...other} />
}

export default SaveChangesButton
