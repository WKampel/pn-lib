import { useState } from 'react'

export const useConfirm = () => {
  const [resolve, setResolve] = useState<(() => void) | null>(null)

  const getConfirmation = (): Promise<void> => {
    return new Promise<void>(resolve => {
      setResolve(() => resolve)
    })
  }

  const confirm = (): void => {
    resolve?.()
    setResolve(null)
  }

  return { getConfirmation, confirm }
}
