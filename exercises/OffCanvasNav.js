import React, { Component } from 'react';
import Radium from 'radium'

const Header = Radium(({ hamburgerAction }) => {
  const styles = { height: 64 };

  return (
    <header className="flex-none flex items-center bg-blue white h3"
      style={ styles }>
      <div className="pointer px2 self-stretch flex items-center"
        onClick={ hamburgerAction }>
        <svg className="icon" viewBox="0 0 20 20">
          <path fill="#fff" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                    s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z" />
        </svg>
      </div>
      <h3 className="caps m0 trim">Off Canvas Nav</h3>
    </header>
  );
});


@Radium
class OffCanvasNav extends Component {

  constructor(props) {
    super(props);
    this.state = { sidebarVisible: false };
  }

  toggleSidebar = (e) => {
    const { sidebarVisible } = this.state;
    this.setState({ sidebarVisible: !sidebarVisible });
  }

  render() {
    const { sidebarVisible } = this.state;
    const offset = sidebarVisible ? '50%' : '0';
    const styles = {
      transform: `translate3d(${ offset }, 0, 0)`,
      transition: `transform 300ms ease-in-out`
    };

    return (
      <div>
        <aside className="vh-100 bg-navy absolute top-0 left-0 bottom-0 col-6 z-1">
        </aside>

        <main className="vh-100 bg-white flex flex-column" style={ styles }>
          <Header hamburgerAction={ this.toggleSidebar } />
          <div className="p2 flex-auto overflow-scroll">
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
          </div>
        </main>

      </div>
    );
  }

}

export default OffCanvasNav;