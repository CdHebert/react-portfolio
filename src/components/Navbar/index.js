import React from 'react';

const Navbar = (props) => {

    const tabs = ['Home', 'About', 'Skills', 'Works', 'Contact'];
    return (
        
            <nav id='nav-wrap'>
        
                <h1 className='color-header'>Hebert Creations</h1>
                <ul id='nav' className="nav">
                    {tabs.map(tab => (
                        <li className="current hvr-underline-from-left" key={tab}>
                            <a className='smoothscroll'
                                href={'#' + tab.toLowerCase()}
                                // Whenever a tab is clicked on,
                                // the current page is set through the handlePageChange props.
                                onClick={() => props.handlePageChange(tab)}
                               
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
       
    );
}

export default Navbar;