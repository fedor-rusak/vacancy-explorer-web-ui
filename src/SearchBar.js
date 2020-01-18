import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="Search-Bar">
        <form onSubmit={this.props.onQuerySubmit}>
          <label>
            <input type="text" value={this.props.query} onChange={this.props.onQueryChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
