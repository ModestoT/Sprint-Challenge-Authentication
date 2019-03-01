import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import JokesList from './components/JokesList';

class App extends Component {

  signOut = e => {
    e.preventDefault();
    localStorage.removeItem('AuthToken');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to = "/jokes">Jokes</NavLink>
          <button onClick={this.signOut}>Signout</button>
        </nav>
        <Route exact path = "/" component={LoginPage} />
        <Route path = "/register" component={RegisterPage} />
        <Route path = "/jokes" component={JokesList} />
      </div>
    );
  }
}

export default withRouter(App);
