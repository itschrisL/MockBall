import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';


const Menu = () => {
    return (
        <Nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark w-100 fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Navbar</a>
                <div class="" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/teams">Teams</a>
                        </li>
                    </ul>
                </div>

            </div>

        </Nav>
    )
}

const StyledMenu = styled.div`
    
`;

const StyledLink = styled(Link)`

`;

const CloseToggle = styled.button`

`;

export default Menu