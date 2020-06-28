import React from 'react';

class Card extends React.Component {

    removeCard = (event) => {
        this.props.onDelete(this.props.id);
    }
    render() {
        return (
            <div className="card">
                <img width="75"
                     height="75"
                     alt="git hub card"
                     src={this.props.avatar_url} />
                <div className="details">
                    <div style={{fontWeight: "bold"}}>{this.props.name}</div>
                    <div>{this.props.company}</div>
                </div>
                <span className="closeButton" onClick={this.removeCard}>X</span>
            </div>
        )
    }
}

export default Card;