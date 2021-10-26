import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Valere Chihisa </span>
                </h1>
                <p className="h-sub-text">
                i'm freenlance developer, mainly computer and new technology pationne
                </p>
                <div className="icons">
                    
                    <a className="icon-holder" href="https://web.facebook.com/profile.php?id=100004934235944">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        </a>
                   
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
