import React from 'react';
import home3 from '../img/home3.jpg';
import home4 from '../img/home4.jpg';
import home5 from '../img/home5.jpg';
import home6 from '../img/home5.jpg';

const MenuHighlights = () => {
    return (
        <div className='menu'>
            <div className='description'></div>
                <h2>Menu Highlights</h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='meals'>
                            <img src={home3} alt='hi'></img>
                            <button>Family style meals</button>
                        </div>
                        <div className='meals'>
                            <img src={home4} alt='hi'></img>
                            <button>Appetizers</button>
                        </div>
                        <div className='meals'>
                            <img src={home5} alt='hi'></img>
                            <button>Classic Entrees</button>
                        </div>
                        <div className='meals'>
                            <img src={home6} alt='hi'></img>
                            <button>Create your own pasta</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MenuHighlights;