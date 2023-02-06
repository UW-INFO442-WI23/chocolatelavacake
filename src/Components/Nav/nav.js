import React from 'react';


export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li><a className="navigator" href="/Home">Introduction</a></li>
                <li>|</li>
                <li><a className="navigator" href="/About">Interactive Map</a></li>
                <li>|</li>
                <li><a className="navigator" href="/Mission">Get Involved</a></li>
                <li>|</li>
                <li><a className="navigator" href="/Mission">About Us</a></li>
            </ul>
        </nav>
    )
    };