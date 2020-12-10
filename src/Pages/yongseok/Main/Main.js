import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Mainpart from './Mainpart/Mainpart';
import './Main.scss';
import '../Common.scss';
import '../reset.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = { none: true };
  }

  componentDidMount() {
    document.title = 'Ys Main';
  }

  handleModalToggle = () => {
    this.setState({ none: !this.state.none });
  };

  handleModalDelete = e => {
    if (e.target.tagName === 'DIV') {
      this.setState({ none: true });
    }
  };

  render() {
    return (
      <>
        <Nav
          handleModalToggle={this.handleModalToggle}
          handleModalDelete={this.handleModalDelete}
          modalState={this.state}
        />
        <Mainpart />
      </>
    );
  }
}

export default Main;
