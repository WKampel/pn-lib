import { Image as ExpoImage, ImageContentFit } from 'expo-image'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export const Image = ({ source, style, contentFit = 'contain' }: { source: string; style: object; contentFit?: ImageContentFit }) => {
  // key={source} fixes a bug I was having where updating the practice and changing the logo would cause the logo's opacity to be 0, whenever transition is used on the image.
  // This fixes it by forcing a re-render.
  return <ExpoImage key={source} contentFit={contentFit} transition={500} placeholder={blurhash} source={source} style={style} />
}
