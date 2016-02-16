import React, { Component } from 'react';
import OffCanvasNav from './OffCanvasNav';

const viewOptions = {
  OFF_CANVAS_NAV: 'Off-canvas Nav',
  MODAL: 'Responsive and Animated Modal',
  SIDEBAR: 'Sidebar (100% Height) and Scrollable Main Area',
  MEDIA_OBJECT: 'Media Object',
  FIXED_HEADER: 'Fixed Header',
  VERTICALLY_CENTER: 'Vertically Center Content'
};

const Nav = ({ goTo }) => {

  const options = Object.keys(viewOptions).map((key, idx) => {
    return (
      <li key={ idx }
        className="mb1 px2 py1 pointer highlight"
        onClick={ () => goTo(key) }>
        { viewOptions[key] }
      </li>
    );
  });

  return (
    <div className="max-width-4 mx-auto p2">
      <h3 className="blue caps">Exercises</h3>
      <ul className="list-reset h2">
        { options }
      </ul>
    </div>
  );
}

const views = {
  OFF_CANVAS_NAV: <OffCanvasNav />,
  MODAL: null,
  SIDEBAR: null,
  MEDIA_OBJECT: null,
  FIXED_HEADER: null,
  VERTICALLY_CENTER: null
};

export default class Exercises extends Component {

  constructor(props) {
    super(props);
    this.state = { type: 'NAV' };
  }

  showExercise = (type) => {
    this.setState({ type });
  }

  render() {
    const { type } = this.state;
    return (views[type] || <Nav goTo={ this.showExercise } />);
  }

}
