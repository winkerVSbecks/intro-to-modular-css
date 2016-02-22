import React, { Component } from 'react';
import OffCanvasNav from './OffCanvasNav';
import ModalView from './Modal';
import Nav from './Nav';
import Sidebar from './Sidebar';
import MediaObject from './MediaObject';
import FixedHeader from './FixedHeader';
import VerticalCentering from './VerticalCentering';
import {StyleRoot} from 'radium';

const views = {
  OFF_CANVAS_NAV: <OffCanvasNav />,
  MODAL: <ModalView />,
  SIDEBAR: <Sidebar />,
  MEDIA_OBJECT: <MediaObject />,
  FIXED_HEADER: <FixedHeader />,
  VERTICALLY_CENTER: <VerticalCentering />,
};

export default class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'NAV' };
  }

  render() {
    const { type } = this.state;
    const view = views[type] || <Nav goTo={ this.showExercise } />;
    return (<StyleRoot>{ view }</StyleRoot>);
  }

  showExercise = (type) => {
    this.setState({ type });
  }
}
