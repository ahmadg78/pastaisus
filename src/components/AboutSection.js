import React from 'react';
import home1 from '../img/home1.jpg';

const AboutSection = () => {
    return(
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h1>The pasta you crave</h1>
                    </div>
                    <div className='hide'>
                        <h1>simply delicious</h1>
                    </div>
                    <button>Order Now</button>
                </div>
                <div className='image'>
                    <img src={home1} alt='guy with pic' /> 
                </div>
            </div>
        </div>
    );
};

export default AboutSection;