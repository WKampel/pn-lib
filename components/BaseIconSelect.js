import Select from './Select'

// You can pass either sets or individual icons, or both
const BaseIconSelect = ({ sets = {}, icons = [], label, onChange, value, getIcon, filter, ...other }) => {
  const allIcons = Object.keys(sets)
    ?.flatMap(set => sets[set].map(name => ({ set, name })))
    .concat(icons)
    .filter(item => (filter ? filter(item) : true))
    .sort((a, b) => a.name?.localeCompare(b.name))

  const getLabel = icon => {
    return icon.name
  }

  const getLabelIcon = icon => {
    return getIcon({ set: icon.set, name: icon.name })
  }

  return (
    <Select
      {...other}
      label={label}
      getValue={icon => icon.set + ':' + icon.name}
      getLabel={getLabel}
      getLabelIcon={getLabelIcon}
      onChange={onChange}
      value={value}
      options={allIcons}
    />
  )
}

export default BaseIconSelect
