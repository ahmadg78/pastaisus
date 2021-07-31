import React from 'react';
import home3 from '../img/home3.jpg';
import home4 from '../img/home4.jpg';
import home5 from '../img/home5.jpg';
import home6 from '../img/home5.jpg';
import home7 from '../img/home7.jpg'
import home8 from '../img/home8.jpg';
import home9 from '../img/home9.jpg';
import home10 from '../img/home10.jpg';
import home11 from '../img/home11.jpg';

import styled from 'styled-components';
import { About, Description, Image } from './styles';

const MenuHighlights = () => {
    return (
        <div>
            <h2>Menu Highlights</h2>
        <Gallery>
                      <Image className='item1'>
                            <img  src={home3} alt='hi'></img>
                            <button>Family style meals</button>
                        </Image>
                        <Image  className='item2'>
                            <img src={home4} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                        <Image className='item3'>
                            <img  src={home7} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                         <Image className='item4' >
                            <img src={home6} alt='hi'></img>
                            <button>Create your own pasta</button>
                        </Image>
                        <Image className='item5'>
                            <img src={home8} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                        <Image className='item6'>
                            <img  src={home9} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                        <Image className='item7'>
                            <img  src={home10} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                        <Image className='item8'>
                            <img   src={home11} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
        </Gallery>
        </div>
    );
};

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 20px;
    .item1{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end:3;
    }
    .item2{
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end:3;
    }
    .item3{
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end:6;
    }
    .item4{
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end:6;
    }
    .item5{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 6;
        grid-row-end: 9;
    }  
    .item6{
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 6;
        grid-row-end: 9;
    }  
    .item7{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 6;
        grid-row-end: 9;
    } 
    .item8{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 6;
        grid-row-end: 9;
    }  
   
`;

export default MenuHighlights;