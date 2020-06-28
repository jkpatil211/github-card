import React from 'react';
import Cardlist from './components/Cardlist';
import Cardform from './components/Cardform';
import './App.css';
import './components.css';

class App extends React.Component {

  state = {
    users : [
      // {id: 1, name: 'Jens Kohl', avatar_url: 'https://avatars0.githubusercontent.com/u/40043?v=4', company: '@milchundzucker'},
      // {id: 2, name: 'Taylor Carpenter', avatar_url: 'https://avatars1.githubusercontent.com/u/26697?v=4', company: '@vulk'},
      // {id: 3, name: 'Jaykumar Patil', avatar_url: 'https://avatars3.githubusercontent.com/u/6754055?v=4', company: '_vois'}
    ]
  }

  addCard = (user) => {
    this.setState((prevState) => ({ users: [...prevState.users, user] }))
  }

  removeCard = (userId) => {
    const newUsers = this.state.users.filter(user => user.id != userId);
    this.setState({users: newUsers});
  }
  
  render() {
    return (
      <>
        <Cardform onSubmit={this.addCard} />
        <Cardlist users={this.state.users} removeCard={this.removeCard} />
      </>
    )
  }
}

export default App;
