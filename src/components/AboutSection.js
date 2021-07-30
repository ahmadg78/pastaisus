import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.jpg';
import {About, Description, Image } from './styles';

const AboutSection = () => {
    return(
        <div>
            <div>
                <Image> 
                    <Header>
                    <img src={home1} alt='guy with pic' /> 
                        <h2>The pasta you crave</h2>
                        <h3>simply delicious</h3>
                        <button>Order Now</button>
                    </Header>
                </Image>
            </div>
        </div>
    );
};

const Header = styled.div`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(.4);
    h2{
        position: absolute;
        padding-bottom: 10rem;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        color: blue;
    }
    h3{ 
        position: absolute;
        padding-bottom: 5rem;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        color: blue;  
    }
    button{
        position: absolute;
        top: 25rem;
        left: 40rem;
      
        
    }
    
`;

//  const Img = styled.div`
//     h2{
//         justify-content: center;
//     }
//  `;
// const Pic = styled.div`
//     h2 {
//         padding-bottom: 5rem
//     }
// `;
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