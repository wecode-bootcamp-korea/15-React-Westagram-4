import React, { Component } from 'react';
import Article from '../Article/Article';
import './Feeds.scss';

class Feeds extends Component {
  render() {
    return (
      <>
        <div className="Feeds">
          <Article />
        </div>
      </>
    );
  }
}

export default Feeds;
