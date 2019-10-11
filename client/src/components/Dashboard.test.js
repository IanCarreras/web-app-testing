import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup)

test('Render submit button', () => {
  const wrapper = rtl.render(<Dashboard />)
  const element = wrapper.getByText(/submit/i)
  expect(element).toBeVisible()
})