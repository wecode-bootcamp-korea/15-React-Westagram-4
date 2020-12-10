import React, { Component } from 'react';
import './SearchModal.scss';

class SearchModal extends Component {
  render() {
    return (
      <li className="search__modal__item">
        <div className="search__modal__item">
          <strong className="search__modal__id">{this.props.item.id}</strong>
          <p className="search__modal__description">
            {this.props.item.description}
          </p>
        </div>
      </li>
    );
  }
}

export default SearchModal;
