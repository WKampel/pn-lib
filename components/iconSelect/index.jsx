import React from 'react'
import { StyleSheet } from 'react-native'
import useAPI from '../../libs/useAPI'
import Select from '../../components/select'
import iconsAPI from '../../api/icons'

export default props => {
  const { data } = useAPI(iconsAPI.getMany.bind(iconsAPI, { name: '', file: '', id: '' }), {
    alertOnError: true,
    autoExec: true,
  })

  return (
    <Select
      selected={props.selected}
      onChange={props.onChange}
      options={data || []}
      getLabel={option => option && option.name}
      getValue={option => option && option.id}
    />
  )
}

const styles = StyleSheet.create({})
