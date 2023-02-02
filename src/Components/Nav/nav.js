import React from 'react';


export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li><a className="navigator" href="/Home">Home</a></li>
                <li><a className="navigator" href="/About">About</a></li>
                <li><a className="navigator" href="/Mission">Get Involved</a></li>
            </ul>
        </nav>
    )
    };