import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const searchBarCurrentText = "Here will be a search bar with a button to start search";
  expect(getByText(searchBarCurrentText)).toBeInTheDocument();
  const searchResultCurrentText = "List of results we got from search (maybe loading spinner)";
  expect(getByText(searchResultCurrentText)).toBeInTheDocument();
});
