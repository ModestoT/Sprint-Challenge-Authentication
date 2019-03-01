import React from 'react';
import makeAxios from './axios-config';

class LoginPage extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = e => {
        e.preventDefault();
        
        const user = {...this.state};

        makeAxios()
            .post('/login', user)
            .then( res => {
                localStorage.setItem('AuthToken', res.data.token);
                this.props.history.push('/users');
            })
            .catch(err => console.log(err.response.data.error ));
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput}/>
                    <button>Login</button>
                    <button onClick={e => this.props.history.push('/register')}>Register</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;