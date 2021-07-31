import React from 'react';
import home3 from '../img/home3.jpg';
import home4 from '../img/home4.jpg';
import home5 from '../img/home5.jpg';
import home6 from '../img/home5.jpg';
import styled from 'styled-components';
import { About, Description, Image } from './styles';

const MenuHighlights = () => {
    return (
        <Services>
            <Description>
                <h2>Menu Highlights</h2>
                <Cards>
                    <Card>
                        <Image>
                            <img src={home3} alt='hi'></img>
                            <button>Family style meals</button>
                        </Image>
                    </Card>
                    <Card>
                        <Image>
                            <img src={home4} alt='hi'></img>
                            <button>Appetizers</button>
                        </Image>
                    </Card>
                        <Card>
                         <Image>
                            <img src={home5} alt='hi'></img>
                            <button>Classic Entrees</button>
                        </Image>
                        </Card>
                       <Card>
                            <Image>
                            <img src={home6} alt='hi'></img>
                            </Image>
                            <button>Create your own pasta</button>
                       </Card>
                </Cards>
            </Description>
        </Services>
    );
};

const Services = styled(About)``;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .img{
        display: flex;
        align-items: center;
    }
`;

export default MenuHighlights;