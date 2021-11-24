import React from 'react';
import './about.scss';
// import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <div className="about" id="about" >
            
            <div className="right">
                <img src="assets/Group 6.png" alt="" />
            </div>

            <div className="left">
                <img src="assets/Group 7.png" alt="" />
                <h2>About Mbare</h2>
                <p>Mbare is home to large number of artists in Zimbabwe,
                    from oil painters to material  recycle artists.
                </p>
                <p>The main concern is getting exposure for those artist, that's
                    where the urban culture and heritage initiative to come and 
                    help. 
                    </p>

                    <button>More on the community</button>
            </div>
            
        </div>
    )
}
