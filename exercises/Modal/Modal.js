import React from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';


const Modal = ({ title, isVisible, toggle, children }) => {
  const styles = {
    height: '100%',
    '@media (min-width: 40em)': { height: '75%' },
  };

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
            className="fixed top-0 left-0 col-12 vh-100 flex items-center z4 bg-darken-4">

            <div style={[styles, {
              transform: `translate3d(0 , ${y}%, 0)`,
              opacity,
            }]}
              className="col-12 sm-col sm-col-8 mx-auto bg-white">

              <header className="bg-blue white flex items-center py2 center">
                <div className="col-2"></div>

                <h3 className="m0 bold trim caps flex-auto">{ title }</h3>

                <button className="btn p0 col-2"
                  onClick={ toggle }>✖︎</button>
              </header>

              <div className="overflow-scroll px2">
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
