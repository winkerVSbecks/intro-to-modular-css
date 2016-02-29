import React from 'react';
import Radium from 'radium';


const FixedHeader = () => {
  const styles = {
    header: { height: 64 },
    main: { marginTop: 64 },
  };

  return (
    <div>
      <header style={ styles.header }
        className="fixed top-0 left-0 right-0 bg-blue px2 flex items-center">
        <h3 className="caps bold white m0">Header</h3>
      </header>

      <main style={ styles.main }
        className="p2">
        <h3 className="caps bold">Main Content Area</h3>
        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
      </main>
    </div>
  );
};

export default Radium(FixedHeader);
