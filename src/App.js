import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FooterComponent from './components/Footer/FooterComponent';
import Topstrip from './components/Header/Top-strip/Topstrip';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './img/fbc-logo.png';
import HomePage from './components/Page/Home/HomePage';
import AboutPage from './components/Page/About/AboutPage';
import ServicesPage from './components/Page/Services/ServicesPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProjectsComponent from './components/Page/Projects/ProjectsComponent';
import PolicyComponent from './components/Page/Policy/PolicyComponent';
import ClientsComponent from './components/Page/Clients/ClientsComponent';
import CareerComponent from './components/Page/Career/CareerComponent';
import ContactComponent from './components/Page/Contact/ContactComponent';

function App() {
  return (
    <div className='App'>
      <Topstrip />
      <Router>
        <Container>
          <Navbar collapseOnSelect expand='lg' variant='light'>
            <Navbar.Brand href='#home'>
              <img style={{ width: '9rem' }} src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'></Nav>
              <Nav>
                <Nav.Link href='#'>
                  <Link to='/'>Home</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/about'>About</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/services'>Services</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/projects'>Projects</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/policy'>Safety Policy</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/clients'>Clients</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/career'>Career</Link>
                </Nav.Link>
                <Nav.Link href='#'>
                  <Link to='/contact'>Contact</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/services'>
            <ServicesPage />
          </Route>
          <Route path='/projects'>
            <ProjectsComponent />
          </Route>
          <Route path='/policy'>
            <PolicyComponent />
          </Route>
          <Route path='/clients'>
            <ClientsComponent />
          </Route>
          <Route path='/career'>
            <CareerComponent />
          </Route>
          <Route path='/contact'>
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
