import React from 'react'
import {Container, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <Nav>
                    <Nav.Item >
                        <div className='text-center py-3'>

                            dani &copy; 2021

                        </div>

                    </Nav.Item>
                </Nav>
            </Container>
        </footer>
    )
}

export default Footer
