import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>  
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;