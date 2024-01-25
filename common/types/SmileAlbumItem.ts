import { FileState } from './FileState'

export type SmileAlbumItem = {
  id: string
  beforePhoto: FileState | null
  afterPhoto: FileState | null
}
