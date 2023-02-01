import React from 'react';
import {About} from 'about.js';
import {Home} from 'home.js';
import {Mission} from 'mission.js';

export default function Nav(props) {
    return(
        <nav>
            <li><a className="navigator" href="/Home">Home</a></li>
            <li><a className="navigator" href="/About">About</a></li>
            <li><a className="navigator" href="/Mission">Get Involved</a></li>
        </nav>
    )
    };