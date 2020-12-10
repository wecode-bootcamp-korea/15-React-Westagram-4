import React, { Component } from 'react';
import Feed from '../Feed/Feed';
import './Feeds.scss';

class Feeds extends Component {
  render() {
    return (
      <>
        <div className="Feeds">
          <Feed />
        </div>
      </>
    );
  }
}

export default Feeds;
