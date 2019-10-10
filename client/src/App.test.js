import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(rtl.cleanup)

test('Render the app', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

test('Render count input', () => {
  
})