import React from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';
import './Modal.css';


const Modal = ({ title, isVisible, toggle, children }) => {
  const containerStyles = { display: isVisible ? '' : 'none' };
  const motionStyle = {
    y: spring(isVisible ? 0 : 150),
    opacity: spring(isVisible ? 1 : 0),
  };

  return (
    <Motion style={ motionStyle }>
      { ({ y, opacity }) => {
        return (
          <aside style={ containerStyles }
            className="fixed top-0 left-0 w-100 vh-100 flex items-center z-4 bg-black-60">

            <div style={ getModalStyles(y, opacity) }
              className="w-100 w-75-m w-50-ns center bg-white Modal">

              <header className="bg-blue white flex items-center pv3 center">
                <div className="w-20"></div>

                <h3 className="ma0 bold truncate ttu tracked flex-auto">{ title }</h3>

                <button className="bg-blue bn white pa0 w-20"
                  onClick={ toggle }>✖︎</button>
              </header>

              <div className="overflow-scroll ph3">
                { children }
              </div>
            </div>
          </aside>
        );
      }}
    </Motion>
  );
};

export default Radium(Modal);

/**
 * Utils
 */
function getModalStyles(y, opacity) {
  return {
    transform: `translate3d(0 , ${y}%, 0)`,
    opacity,
  };
}
