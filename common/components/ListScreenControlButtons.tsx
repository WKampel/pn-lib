import { useNav } from '../hooks/useNav'
import { SaveChangesButton } from './buttons/SaveChangesButton'
import { SolidButton } from './buttons/SolidButton'

export const ListScreenControlButtons = ({ addScreen, save, isModified, isSaving }: { addScreen: string; save: () => void; isModified: boolean; isSaving: boolean }) => {
  const nav = useNav()

  return (
    <>
      <SolidButton text='Add' onPress={() => nav.navigate(addScreen)} />
      <SaveChangesButton variant='secondary' onPress={save} loading={isSaving} modified={isModified} />
    </>
  )
}
