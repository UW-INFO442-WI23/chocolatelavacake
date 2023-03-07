import React from 'react';
export default function About(props) {
    return (
        <div className='about-container' id='about-us'>
            <h1>
                About us
            </h1>
            <div className="card-container">
                <div className="card">
                    <img src="cameron.jpeg" alt="Cameron Rezak in a suit"></img>
                    <h3>Cameron Rezak</h3>
                    <p className="title">Project Manager</p>
                    <p className='descript'>Cameron is an undergraduate student in the University of Washington's Informatics program. He aspires to make an impact through technology with a human purpose.</p>
                </div>
                <div className="card">
                    <img src="Jacob.jpg" alt="Jacob Kim in a suit"></img>
                    <h3>Jacob Kim</h3>
                    <p className="title">Product Manager</p>
                    <p className='descript'>Jacob is an undergraduate student in the University of Washington's Informatics program. He has a strong interest in product management and data analytics.</p>
                </div>
                <div className="card">
                    <img src="matt.jpg" alt="Matt Balgan sitting down smiling"></img>
                    <h3>Matthew Balgan</h3>
                    <p className="title">Software Developer</p>
                    <p className='descript'>Matt is an undergraduate student in the University of Washington's Informatics program. He is aiming to become a software developer in the near future.</p>
                </div>
                <div className="card">
                    <img src="ruolin.jpg" alt="Ruolin Chen smiling"></img>
                    <h3>Ruolin Chen</h3>
                    <p className="title">UX Designer</p>
                    <p className='descript'>Ruolin is an undergraduate student at UW. She wants to continue her study in Human-Computer Interaction and aiming to become a Strategic Researcher in the future.</p>
                </div>
                <div className="card">
                    <img src="matthewh.jpg" alt="Matthew Herradura in a tie"></img>
                    <h3>Matthew Herradura</h3>
                    <p className="title">Software Developer</p>
                    <p className='descript'>Matthew is an undergraduate student at the University of Washington's iSchool. His focus is related to Human-Computer Interaction and he has strong interests in UX design as well as front end development.</p>
                </div>
            </div>
        </div>
    )
};