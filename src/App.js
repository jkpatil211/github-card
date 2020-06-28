import React from 'react';
import Cardlist from './components/Cardlist';
import Cardform from './components/Cardform';
import './App.css';
import './components.css';

class App extends React.Component {

  state = {
    users : []
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
      <div id="cardContainer">
        <Cardform onSubmit={this.addCard} />
        <Cardlist users={this.state.users} removeCard={this.removeCard} />
      </div>
    )
  }
}

export default App;
