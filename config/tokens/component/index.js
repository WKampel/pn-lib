import button from './button.json'
import card from './card.json'
import checkBox from './checkBox.json'
import colorPicker from './colorPicker.json'
import editor from './editor.json'
import fileInput from './fileInput.json'
import group from './group.json'
import h from './h.json'
import label from './label.json'
import link from './link.json'
import practiceCard from './practiceCard.json'
import radio from './radio.json'
import screen from './screen.json'
import serviceCard from './serviceCard.json'
import _switch from './switch.json'
import table from './table.json'
import textInput from './textInput.json'
import webSelect from './webSelect.json'
import yesNoInput from './yesNoInput.json'

const componentTokens = {
  ...button,
  ...card,
  ...textInput,
  ...group,
  ...link,
  ...label,
  ...screen,
  ...h,
  ...practiceCard,
  ...fileInput,
  ...colorPicker,
  ...webSelect,
  ...checkBox,
  ...radio,
  ...yesNoInput,
  ...table,
  ..._switch,
  ...serviceCard,
  ...editor,
}

export default componentTokens
