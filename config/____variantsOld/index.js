import button from './button'
import card from './card'
import colorPicker from './colorPicker'
import editableList from './editableList'
import group from './group'
import h from './h'
import imageInput from './imageInput'
import link from './link'
import practiceCard from './practiceCard'
import screen from './screen'
import spinner from './spinner'
import textInput from './textInput'

export default generateVariants = tokens => ({
  button: button(tokens),
  group: group(tokens),
  screen: screen(tokens),
  h: h(tokens),
  card: card(tokens),
  practiceCard: practiceCard(tokens),
  link: link(tokens),
  textInput: textInput(tokens),
  colorPicker: colorPicker(tokens),
  imageInput: imageInput(tokens),
  spinner: spinner(tokens),
  editableList: editableList(tokens),
})
