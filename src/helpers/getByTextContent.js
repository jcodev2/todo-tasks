const getByTextContent = (container, text) => {
  return Array.from(container.querySelectorAll('*')).find((element) => {
    return element.textContent === text
  })
}

export default getByTextContent
