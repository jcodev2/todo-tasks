// import Container from 'src/components/Container'
import { cleanup, render, screen } from '@testing-library/react'
import Container from 'src/components/Container'
import { afterEach, describe, it } from 'vitest'

describe('Container', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Container />)
  })

  it('should render children', () => {
    render(<Container>children</Container>)

    screen.getByText('children')
  })
})
