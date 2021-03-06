import React, { useState } from 'react';
import {
  aboutMe,
  portfolio,
  socialMedia
} from './data'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import './App.css';
import './assets/css/default.css';
import './assets/css/layout.css';
import './assets/css/fonts.css';
import './assets/css/magnific-popup.css';
import './assets/css/media-queries.css';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About aboutMe={aboutMe} />;
      case 'Skills':
        return <Skills />;
      case 'Works':
        return <Works portfolio={portfolio} />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };


  return (
    <section>

      <div className="App">
        {currentPage === 'Home'
         ? <header className="App-header">
            <div>
              {/* Pass the state value and the setter as props to NavTabs */}
              <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
              {/* Call the renderPage function passing in the currentPage */}
              <div>{renderPage(currentPage)}</div>
            </div>
            {/* <hr /> */}
           
          </header>

          : <section className="App-header background-img">
            <div>
              {/* Pass the state value and the setter as props to NavTabs */}
              <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
              {/* Call the renderPage function passing in the currentPage */}
              <div>{renderPage(currentPage)}</div>
            </div>
            {/* <hr /> */}
           
          </section>}
      </div>
      <Footer
              socialMedia={socialMedia} />
    </section>
  );
}

export default App;



