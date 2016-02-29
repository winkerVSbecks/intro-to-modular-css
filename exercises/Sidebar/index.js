import React from 'react';
import Radium from 'radium';


const Sidebar = () => {
  const styles = {
    sidebar: { width: '25%' },
    main: { marginLeft: '25%' },
  };

  return (
    <div>
      <aside style={ styles.sidebar }
        className="fixed top-0 bottom-0 left-0 col-3 bg-aqua">
        <h3 className="caps bold navy px2">Sidebar</h3>
        <ul className="list-reset navy">
          <li className="px2 py1">List Reset</li>
          <li className="px2 py1">Removes bullets</li>
          <li className="px2 py1">Removes numbers</li>
          <li className="px2 py1">Removes padding</li>
        </ul>
      </aside>

      <main style={ styles.main }
        className="px2">
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

export default Radium(Sidebar);
