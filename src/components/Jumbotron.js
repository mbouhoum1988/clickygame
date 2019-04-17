import React from 'react';
import imagefont from '../images/img1.jpg';

function Jumbo() {
    return(
        <div className='fluid-container'>
           <img className='jum-image' src={imagefont} alt='imagefont' />
            <div className='div-image'>
                <h1>Clicky Game!</h1>
                <p>Click on an image to earn points, but don't click on any more than once!
                </p>
           </div>
        </div>
    )
}

export default Jumbo;