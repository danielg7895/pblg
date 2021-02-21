import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


const Header = () => {
    const userInfo = JSON.parse(localStorage.getItem("userData"))
    console.log(userInfo)

    const logoutHandler = () => {
        logout()
        window.location.reload()
    }

    return (
        <header >
            <Navbar >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>心配</Navbar.Brand>
                    </LinkContainer>

                    <LinkContainer to='/addpost'>
                        <Nav.Link>Create</Nav.Link>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-nav-bar" />
                        <Navbar.Collapse id="basic-navbar-nav"/>
                        <Nav className="ml-auto">

                        {userInfo ? 
                            <NavDropdown title={userInfo.username} id="user">

                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/settings'>
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/'>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown> 
                            :
                            <LinkContainer to='login'>
                                <Nav.Link>login</Nav.Link>
                            </LinkContainer>
                        }


                        </Nav>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header
