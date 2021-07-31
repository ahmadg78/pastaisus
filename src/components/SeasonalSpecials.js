import React from 'react';
import styled from 'styled-components';
import { Image } from './styles';
import home2 from '../img/home2.jpg';

const SeasonalSpecials = () => {
    return (
        <div className='SeasonSpecials'>
            <h2>Season Specials</h2>
            <Section>
                <Image>
                    <img src={home2} alt='guy with pic' /> 
                    <p>Enjoy favorites like take home Entre'es for $5
                    Lunch-Sized Favorites, and $15 Bottles of wine</p>
                <button>Check out all specials</button>
                <h2>*Prices and availability vary by location</h2>
                </Image>
            </Section>  
        </div>
    );
};

const Section = styled.div`
     width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(.4);
    p{
        position: absolute;
        bottom: 20rem;
        left: 16px;
        color: white;
    }
    h2{
        position: absolute;
        bottom: 10rem;
        left: 16px;
        color: white;
    }
    button{
      position: absolute;
      bottom: 14rem;
      left: 16px;
     
      
    }
`;

export  default SeasonalSpecials;