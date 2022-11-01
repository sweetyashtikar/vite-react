import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <MainHeader>
                <NavLink to="/">
                    <img src='./images/logo.webp' alt='logo' className='logo'/>
                </NavLink>
                <Navbar />
            </MainHeader>
        </header>
    );
}


const MainHeader = styled.header`

    padding: 0 4.8rem;
    height: 10rem;
    color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        height: auto;
        max-width:100%;
    }
`;


export default Header;