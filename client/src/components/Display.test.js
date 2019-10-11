import React from 'react';
import Display from './Display';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup)

test('Render display component', () => {
    const wrapper = rtl.render(<Display />)
    wrapper.debug()
})