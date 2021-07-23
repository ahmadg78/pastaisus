import React from 'react';
import home1 from '../img/home1.jpg';
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About>
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
        </About>
    );
};

// styled component

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`

export default AboutSection;