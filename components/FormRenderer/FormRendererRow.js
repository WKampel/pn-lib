import { Children } from 'react'
import Group from '../Group'

const FormRendererRow = ({ children }) => {
  // If there are no children, return null or an empty fragment
  if (!children || Children.count(children) === 0) {
    return <></>
  }

  return (
    <Group x style={{ width: '100%' }}>
      {children}
    </Group>
  )
}

export default FormRendererRow
