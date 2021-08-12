import React from 'react';
import home1 from '../img/home1.jpg';
import home2 from '../img/home2.jpg';
import home3 from '../img/home3.jpg';
import home4 from '../img/home4.jpg';
import home5 from '../img/home5.jpg';
import home6 from '../img/home6.jpg';
import home7 from '../img/home7.jpg'
import home8 from '../img/home8.jpg';
import home9 from '../img/home9.jpg';
import home10 from '../img/home10.jpg';
import home11 from '../img/home11.jpg';

import styled from 'styled-components';
import { About, Description, Image } from './styles';

const MenuHighlights = () => {
    return (
        <div className='container'>
            <h2>Season specials</h2>
            <Gallery>
            <Image className='gallery_item1'>
                <img  src={home1} alt='hi'></img>
            </Image>
            <Image className='gallery_item2'>
                <img  src={home2} alt='hi'></img>
            </Image>
            <Image className='gallery_item3'>
                <img  src={home3} alt='hi'></img>
            </Image>
            <Image className='gallery_item4'>
                <img  src={home4} alt='hi'></img>
            </Image>
            <Image className='gallery_item5'>
                <img  src={home5} alt='hi'></img>
            </Image>
            <Image className='gallery_item6'>
                <img  src={home6} alt='hi'></img>
            </Image>
            <Image className='gallery_item7'>
                <img  src={home7} alt='hi'></img>
            </Image>
            <Image className='gallery_item8'>
                <img  src={home8} alt='hi'></img>
            </Image>
            </Gallery>
        </div>
    );
};

const Gallery = styled.div`
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    display: grid;
    grid-template-columns: 200px 200px 200px 200px  ;
    grid-template-rows: 300px 300px 300px 300px 300px;
    grid-gap: 10px;
     .gallery_item1{
         grid-column-start: 1;
         grid-column-end: 3;
         grid-row-start: 1;
         grid-row-end: 2;
       
    }
    .gallery_item2{
       grid-column-start: 3;
       grid-column-end: 6;
       grid-row-start: 1;
       grid-row-end: 3;
    }
    .gallery_item3{
       grid-column-start: 1;
       grid-column-end: 3;
       grid-row-start: 2;
       grid-row-end: 4;
    }
    .gallery_item4{
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-column-end: 5;
     
    }
    .gallery_item5{
        grid-column-start: 5;
        grid-column-end: 6;
        grid-row-start: 3;
        grid-row-end: 5;
    }  
    .gallery_item6{
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 5;
    }  
     .gallery_item7{
         grid-column-start: 1;
         grid-column-end: 3;
         grid-row-start: 5;
         grid-row-end: 6;
   
    } 
    .gallery_item8{
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 5;
        grid-row-end: 6;
        
     } 
`;

export default MenuHighlights;