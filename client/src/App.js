import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';

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
        <Route exact path = "/" component={} />
        <Route path = "/register" component={} />
        <Route path = "/users" component={} />
      </div>
    );
  }
}

export default withRouter(App);
