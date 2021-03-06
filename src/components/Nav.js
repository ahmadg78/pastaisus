import React from "react";
import styled, { StyledComponent } from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <a id='logo' href='#'>Pasta</a>
            </h1>
            <ul>
                <li>
                    <a href=''>MENU</a>
                </li>
                <li>
                    <a href=''>ORDER NOW</a>
                </li>
                <li>
                    <a href=''>JOIN WAITLIST</a>
                </li>
                <li>
                    <a href=''>LOGIN</a>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #232322;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;