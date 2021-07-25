import React from 'react';

const Navbar = (props) => {

    const tabs = ['Home', 'About', 'Resume', 'Works', 'Contact'];
    return (
        
            <nav id='nav-wrap'>
        

                <ul id='nav' className="nav">
                    {tabs.map(tab => (
                        <li className="current" key={tab}>
                            <a className='smoothscroll'
                                href={'#' + tab.toLowerCase()}
                                // Whenever a tab is clicked on,
                                // the current page is set through the handlePageChange props.
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
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