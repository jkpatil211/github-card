import React from 'react';
import Card from './Card';

class Cardlist extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.users.map((user) => (
                    <Card key={user.id} onDelete={this.props.removeCard} {...user} />
                ))}
            </div>
        )
    }
}

export default Cardlist;