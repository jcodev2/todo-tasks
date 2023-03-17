import { cleanup, render, screen } from '@testing-library/react'
import Layout from 'src/components/Layout'
import getByTextContent from 'src/helpers/getByTextContent'
import { afterEach, describe, expect, it } from 'vitest'

describe('Layout', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Layout />)
  })

  it('should render children', () => {
    render(<Layout>children</Layout>)

    screen.getByText('children')
  })

  it('should render title', () => {
    render(<Layout />)

    const todoTaskApp = getByTextContent(document.body, 'Todo TaskApp')

    expect(todoTaskApp).toBeDefined()
  })

  it('should render a main element', () => {
    render(<Layout />)

    const main = document.querySelector('main')

    expect(main).toBeDefined()
  })
})
