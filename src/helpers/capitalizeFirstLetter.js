const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') throw new Error('Argument must be a string')

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter
