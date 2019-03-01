import React from 'react';
import makeAxios from './axios-config';

class UsersList extends React.Component {
    state = {
        jokes: []
    };

    componentDidMount(){
        if(!localStorage.getItem('AuthToken')){
            this.props.history.push('/')
            alert('Please login to view this information');
        } else {
            makeAxios()
                .get('jokes')
                .then(res => this.setState({ jokes: res.data }))
                .catch(err => console.log(err.response.data.error));
        }
    }

    render() {
        return (
            <div className='jokes-list-wrapper'>
                <h1>Users</h1>
                <div className='jokes'>
                    {this.state.jokes.map( joke => 
                        <div className='joke' key={joke.id}>
                            <p>ID: {joke.id}</p>
                            <h2>Joke: {joke.joke}</h2>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default UsersList;