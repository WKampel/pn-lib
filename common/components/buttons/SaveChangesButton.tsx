import React from 'react'
import { SolidButton, SolidButtonProps } from './SolidButton'

type SaveChangesButtonProps = SolidButtonProps & {
  modified: boolean
}

export const SaveChangesButton = (props: SaveChangesButtonProps) => {
  const { modified, ...other } = props
  return <SolidButton {...other} text={modified ? 'Save' : 'Saved'} disabled={modified ? false : true} />
}
