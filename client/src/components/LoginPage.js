import React from 'react';
import makeAxios from '';

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

        console.log(user);

    }

    render() {
        return (
            <div className="login-wrapper">
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