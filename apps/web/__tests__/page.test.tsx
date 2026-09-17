import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('renders heading', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('ScribeHealth — Phase 0')
})
