import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGifts, faShoppingBasket, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { About, Description, Image } from './styles';


const MenuHighlights = () => {
    return (
        <div>
                <h2>Menu Highlights</h2>
                <Cards>
                        <Card>
                        <FontAwesomeIcon icon={faEnvelope}/>
                            <button>Classic Entrees</button>
                        </Card>
                        <Card>
                        <FontAwesomeIcon icon={faGifts} />
                            <button>Classic Entrees</button>
                        </Card>
                        <Card>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                            <button>Classic Entrees</button>
                        </Card>
                        <Card>
                        <FontAwesomeIcon icon={faUserAlt}/>
                            <button>Classic Entrees</button>
                        </Card>
                </Cards>
          </div>
    )
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