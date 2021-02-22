import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import axiosWithAuth from  './helpers/axiosWithAuth'
import "./styles.scss";

function App() {
  const logout = () => {
    axiosWithAuth().post('#')
      .catch(error => console.log('unable to logout'));
      localStorage.removeItem('token');
  }
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblepage' component={BubblePage} />
        </Switch>
      </div>
      <h3><Link to='/' onClick={logout}>Logout</Link></h3>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
