import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
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
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Works':
        return <Works />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />, <Footer />;
    }
  };

  return (
    <div className="App">
    {currentPage === 'Home' && (
      <header className="App-header">
        <div>
          {/* Pass the state value and the setter as props to NavTabs */}
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Call the renderPage function passing in the currentPage */}
          <div>{renderPage(currentPage)}</div>
        </div>

      </header> )}
      <section className="App-header">
        <div>
          {/* Pass the state value and the setter as props to NavTabs */}
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Call the renderPage function passing in the currentPage */}
          <div>{renderPage(currentPage)}</div>
        </div>

      </section>
        </div> 
  );
}

export default App;



