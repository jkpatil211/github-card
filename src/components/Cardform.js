import React from 'react';
import axios from 'axios';

class Cardform extends React.Component {
    state = {
        username: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.onSubmit(user.data);
        this.setState({username: ''})
    };

    render() {
        return (
            <>
                <form id="githubForm" onSubmit={this.handleSubmit}>
                    <label>Github user name: </label>
                    <input type="text" name="username"
                           value={this.state.username}
                           onChange={(e) => this.setState({username: e.target.value})} />
                    <input className="addUser" type="submit"
                           value="Add User"
                            />
                </form>
            </>
        )
    }
}

export default Cardform;