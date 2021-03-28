
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home'
import About from './about';
import HowItWorks from './howItWorks.js';
import Started from './getstarted.js';
import Profile from './profile'
import LogoTitle from './LogoTitle';
import placeholderImageLogo from "./Images/G.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-div">
          <ul className="navbar">
            <li>
              <a id="logo-nav" className="logo-nav" style={{padding: '0px'}} href='/'><Image src={placeholderImageLogo} className="logo-img" style={{width: '100px', height: '50px'}} /></a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <a href="mailto:ksuwebservices@gmail.com">Email Us</a> 
            </li>
            {/* <li>
              <Link to="/start">Started</Link>
            </li> */}
          </ul>

          {/* <hr /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/how-it-works">
              <HowItWorks />
            </Route>
            <Route path="/start">
              <Started />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
