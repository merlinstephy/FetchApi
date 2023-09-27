import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import Home from '../pages/home';
import FetchData from './FetchData';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="sm">
                        <Navbar.Brand href="#"><img className ="rounded-circle" src="logo.jpg" alt="Chania" style ={{height : "50px" , width : "50px"}}></img> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px', float : 'left' }}
                                navbarScroll
                            >
                                <Nav.Link href= "/home" style= {{color:'blue'}}>HOME</Nav.Link>
                                <Nav.Link href= "/FetchData">EMPLOYEE DETAILS</Nav.Link>
                               

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                       
                        <Route path='/home' element = {<Home/>}></Route>
                        <Route path='/FetchData' element = {<FetchData/>}></Route>
                            
                        
                
                    </Routes>
                </div>
            </Router>
        )
    }
}