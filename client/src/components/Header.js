import React from 'react'
import { Link } from 'react-router-dom';
import {styled} from 'styled-components'

const Header=()=> {
  return (
    <Container>
        <Nav>
            <Logo><h1>Logo</h1></Logo>
            <Navbar>
                <Item><span>Home</span></Item>
                <Item><span>Events</span></Item>
                <Item><span>Teachers</span></Item>
                <Item><span>Students</span></Item>
                  <Item><span><Link to="/manage" >Manage</Link></span></Item>
                  
            </Navbar>
        </Nav>
    </Container>
  )
}
const Container = styled.div`
    overflow-x: hidden;
    width: 100vw;
    height: 100px;
    background-color: #fff;
    box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45),
                25px 0 20px -20px rgba(0, 0, 0, 0.45),
                0px 25px 20px -20px rgba(0, 0, 0, 0.45),
                -25px 0 20px -20px rgba(0, 0, 0, 0.45);
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 30px;
`;

const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 60%;
    height: 100%;
    align-items: center;

    span {
        font-weight: 600;
        font-size: 1.3rem;
    }

    padding-right: 20px;
`;

const Item = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(183, 183, 104);

        span {
            color: white;
        }
    }
`;

const Logo = styled.div``;

export default Header
