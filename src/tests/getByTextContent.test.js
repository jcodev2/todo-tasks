import getByTextContent from 'src/helpers/getByTextContent'
import { describe, expect, test } from 'vitest'

describe('getByTextContent', () => {
  test('finds element with exact text', () => {
    const container = document.createElement('div')
    container.innerHTML = '<p>hello world</p>'

    const element = getByTextContent(container, 'hello world')

    expect(element.tagName).toBe('P')
    expect(element.textContent).toBe('hello world')
  })

  test('returns null if text is not found', () => {
    const container = document.createElement('div')
    container.innerHTML = '<p>hello world</p>'

    const element = getByTextContent(container, 'goodbye')

    expect(element).toBeUndefined()
  })

  test('finds element with text in child node', () => {
    const container = document.createElement('div')
    container.innerHTML = '<p><strong>hello</strong> world</p>'

    const element = getByTextContent(container, 'hello world')

    expect(element.tagName).toBe('P')
    expect(element.textContent).toBe('hello world')
  })
})
