import React from 'react';
import styled from 'styled-components';
import { Image } from './styles';
import home2 from '../img/home2.jpg';

const SeasonalSpecials = () => {
    return (
        <Heading>
            <h3>Season Specials</h3>
            <Section>
                <Image>
                    <img src={home2} alt='guy with pic' /> 
                    <p>Enjoy favorites like take home Entre'es for $5<br></br>
                       Lunch-Sized Favorites, and $15 Bottles of wine</p>
                <button>Check out all specials</button>
                <h2>*Prices and availability vary by location</h2>
                </Image>
            </Section>  
        </Heading>
    );
};

const Heading = styled.div`
    h3{
        margin-bottom: 2rem;
    }
`;

const Section = styled.div`
     width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(.4);
    padding-bottom: 5rem;
    p{
        position: absolute;
        bottom: 20rem;
        left: 16px;
        color: white;
        font-size: 2rem;
    }
    h2{
        position: absolute;
        bottom: 10rem;
        left: 16px;
        color: white;
        font-size: 2rem;

    }
    button{
      position: absolute;
      bottom: 14rem;
      left: 16px;
     
      
    }
`;

export  default SeasonalSpecials;