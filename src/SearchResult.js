import React from 'react';

import './SearchResult.css';

class SearchResult extends React.Component {
  render() {
    return (
      <div className="Search-Result">
        {this.props.querySubmit
          ? "Loadind search results!"
          : "List of results we got from search (maybe loading spinner)"
        }
      </div>
    );
  }
}

export default SearchResult;
