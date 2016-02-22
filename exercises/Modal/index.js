import React, { Component } from 'react';
import Modal from './Modal';


export default class ModalView extends Component {

  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <div>
        <div className="p2">
          <h3 className="caps bold">Here be modals</h3>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p className="center m3">
            <button className="btn"
              onClick={ this.toggleModal }>Open Modal</button>
          </p>
        </div>

        <Modal isVisible={ modalVisible }
          title={ 'Modal Title' }
          toggle={ this.toggleModal }>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
        </Modal>
      </div>
    );
  }

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  }

}
