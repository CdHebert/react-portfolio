import React from 'react';


const Footer = ({ socialMedia }) => {

   

    const networks = socialMedia.social.map(network => {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2021 Cody Hebert</li>
                    </ul>

                </div>

            </div>
        </footer>
    );
};

export default Footer;