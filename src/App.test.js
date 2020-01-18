import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";

import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('renders, writes query, calls search, checks result text', () => {
  render(<App />, container);
  const searchResultStartText = "List of results we got from search (maybe loading spinner)";
  const searchResult = document.querySelector("div[class='Search-Result'");
  expect(searchResult.innerHTML).toBe(searchResultStartText);

  const testQuery = "test query";
  const queryInput = document.querySelector("input[type='text']");
  fireEvent.change(queryInput, { target: { value: testQuery } });

  expect(queryInput.value).toBe(testQuery);


  const button = document.querySelector("input[value='Search']");
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

  const searchResultLoadingText = "Loadind search results!";
  expect(searchResult.innerHTML).toBe(searchResultLoadingText);
});
