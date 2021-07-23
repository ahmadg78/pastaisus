import React from 'react';
import home2 from '../img/home2.jpg';

const SeasonalSpecials = () => {
    return (
        <div className='services'>
            <div className='description'>
                <h2>Enjoy favorites like take home Entre'es for $5
                Lunch-Sized Favorites, and $15 Bottles of wine</h2>
            </div>
                <button>Check out all specials</button>
                <h2>*Prices and availability vary by location</h2>
                <div className='image'>
                    <img src={home2} alt='guy with pic' /> 
                </div>
        </div>
    );
};

export  default SeasonalSpecials;