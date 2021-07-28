import React from 'react';
import home1 from '../img/home1.jpg';
import {About, Description, Image } from './styles';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className='title'>
                    <div className='hide'>
                        <h1>The pasta you crave</h1>
                    </div>
                    <div className='hide'>
                        <h1>simply delicious</h1>
                    </div>
                    <button>Order Now</button>
                </div>
                <Image>
                    <img src={home1} alt='guy with pic' /> 
                </Image>
            </Description>
        </About>
    );
};

// styled component

// const About = styled.div`
//     min-height: 90vh;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5rem 10rem;
//     color: black;
// `
// const Description = styled.div`
//     flex: 1;
//     padding-right: 5rem;
//     font-weight: lighter;
// `;

// const Image = styled.div`
//     flex: 1;
//     img{
//         width: 100%;
//         height: 70vh;
//         object-fit: cover ;

//     }
// `;

 export default AboutSection;