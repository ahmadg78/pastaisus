import React from 'react';
import styled from 'styled-components';

const Sectional = () => {
    return (
        <Section>
            <div>
                <h2>About pasta</h2>
                <h4>contact us</h4>
                <h4>Nutritonal & Allergians</h4>
                <h4>careers</h4>
                <h4>Specials</h4>
            </div>
            <div >
                <h2>Gift Cards & Offers</h2>
                <h4>Check Balances</h4>
                <h4>Specials</h4>
                <h4>Specials</h4>
                <h4>Specials</h4>
            </div>
            <div>
                <h2>Order to go</h2>
                <h4>My account</h4>
                <h4>Look up Order</h4>
                <h4>Order History</h4>
            </div>
        </Section>
    );
};

const Section = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 10rem;
    h2{
        padding-bottom: 3rem;
    }
    h4{
        width: 5%;
        padding: .5rem 0rem 1rem 0rem;
    }
`;
// const About = styled.div`
//     padding-top: 5rem;
// `;

export default Sectional;