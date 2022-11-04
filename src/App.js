import './App.css';
import Home from './Home';
import './Home.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './Menu';
import NavBar from './NavBar';
import './NavBar.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
