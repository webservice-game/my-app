
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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/how-it-works">How It Works</Link>
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
