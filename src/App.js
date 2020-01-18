import React from 'react';

import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], query: "", querySubmit: false};
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onQuerySubmit = this.onQuerySubmit.bind(this);
  }

  onQueryChange(event) {
    this.setState({query: event.target.value});
  }

  onQuerySubmit(event) {
    this.setState({querySubmit: true});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <SearchBar query={this.state.query} onQueryChange={this.onQueryChange} onQuerySubmit={this.onQuerySubmit}/>
        <SearchResult querySubmit={this.state.querySubmit}/>
      </div>
    );
  }
}

export default App;
