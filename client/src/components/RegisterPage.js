import React from 'react';
import makeAxios from '';

class RegisterPage extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    register = e => {
        e.preventDefault();
        
        const user = {...this.state};

        console.log(user);

    }

    render() {
        return (
            <div className="register-wrapper">
                <form onSubmit={this.register}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput}/>
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default RegisterPage;