import React from 'react';
import Radium from 'radium';


const VerticalCentering = () => {
  const styles = {
    lineHeight: { lineHeight: 3 },
    transformContainer: { height: '50vh' },
    transform: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: `translate3d(-50%, -50%, 0)`,
    },
  };

  return (
    <div>
      <div style={ styles.lineHeight }
        className="p2 bg-red white mb4">
        Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.
      </div>

      <div className="flex items-stretch mb4">
        <div className="bg-red white p3 flex items-center caps bold">
          Bacon
        </div>
        <div className="bg-aqua navy p3 flex-auto">
          Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.
        </div>
      </div>

      <div style={ styles.transformContainer }
        className="bg-red white relative">
        <div style={ styles.transform }>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.</div>
      </div>
    </div>
  );
};

export default Radium(VerticalCentering);
