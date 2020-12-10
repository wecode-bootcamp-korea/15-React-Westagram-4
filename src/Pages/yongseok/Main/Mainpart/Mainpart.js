import React, { Component } from 'react';
import Feeds from '../Feeds/Feeds';
import Mainright from '../Mainright/Mainright';
import './Mainpart.scss';

class Mainpart extends Component {
  render() {
    return (
      <main className="Mainpart">
        <Feeds />
        <Mainright />
      </main>
    );
  }
}

export default Mainpart;
