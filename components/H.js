import React from 'react'
import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'

const H = ({ children, size = 'm' }) => {
  const styles = useStyles(styleConfig, { size })

  return <Text style={styles}>{children}</Text>
}

const styleConfig = {
  base: {
    color: 'rgb(75, 75, 75)',
  },
  size: {
    m: {
      fontSize: '$font-size-xl',
    },
    s: {
      fontSize: '$font-size-l',
    },
  },
}

export default H
