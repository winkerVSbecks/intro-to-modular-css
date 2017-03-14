import React from 'react';
import './FixedHeader.css';


const FixedHeader = () => {
  return (
    <div>
      <header
        className="fixed top-0 left-0 right-0 bg-blue ph3 flex items-center FixedHeader">
        <h3 className="ttu tracked bold white ma0">Header</h3>
      </header>

      <main className="pa2 Main">
        <h3 className="ttu tracked bold">Main Content Area</h3>
        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
      </main>
    </div>
  );
};

export default FixedHeader;
