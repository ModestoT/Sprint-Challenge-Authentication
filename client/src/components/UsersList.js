import React from 'react';
import makeAxios from '';

class UsersList extends React.Component {
    state = {
        users: []
    };

    componentDidMount(){
        if(!localStorage.getItem('AuthToken')){
            this.props.history.push('/')
            alert('Please login to view this information');
        } else {
            makeAxios()
                .get('users')
                .then(res => this.setState({ users: res.data }))
                .catch(err => console.log(err.response.data.error));
        }
    }

    render() {
        return (
            <div className='users-list-wrapper'>
                <h1>Users</h1>
                <div className='users'>
                    {this.state.users.map( user => 
                        <div className='user' key={user.id}>
                            <h2>{user.username}</h2>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default UsersList;