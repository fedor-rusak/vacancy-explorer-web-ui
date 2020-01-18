import React from 'react';

import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}

export default App;
