import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UsersList from './components/UsersList';

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
          <button onClick={this.signOut}>Signout</button>
          <NavLink to = "/users">Users</NavLink>
        </nav>
        <Route exact path = "/" component={LoginPage} />
        <Route path = "/register" component={RegisterPage} />
        <Route path = "/users" component={UsersList} />
      </div>
    );
  }
}

export default withRouter(App);
