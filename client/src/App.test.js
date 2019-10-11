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

test('strikes renders in the app', () => {
  const wrapper = rtl.render(<App />)
  wrapper.getByText(/strikes/i)
})