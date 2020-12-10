import React, { Component } from 'react';
import './ProfileModal.scss';

class ProfileModal extends Component {
  render() {
    const { handleModalDelete, modalState } = this.props;
    const profileModal = 'profile profile__modal__box';
    return (
      <div className="modal__container" onClick={handleModalDelete}>
        <ul
          className={modalState.none ? profileModal : `${profileModal} active`}
        >
          <li className="profile profile__modal__item">
            <i className="profile far fa-user-circle fa-fw modal__icon"></i>
            <span className="profile">프로필</span>
          </li>
          <li className="profile profile__modal__item">
            <i className="profile far fa-bookmark fa-fw modal__icon"></i>
            <span className="profile">저장됨</span>
          </li>
          <li className="profile profile__modal__item">
            <i className="profile fas fa-cog fa-fw modal__icon"></i>
            <span className="profile">설정</span>
          </li>
          <li className="profile profile__modal__item">로그아웃</li>
        </ul>
      </div>
    );
  }
}

export default ProfileModal;
