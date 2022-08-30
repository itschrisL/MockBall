import React from "react";

class GameCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            away_team: props.away_team,
            home_team: props.home_team,
            date: props.date
        };
    }



    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <p>{this.state.away_team} VS {this.state.home_team}</p>
                    <p>{this.state.date}</p>
                </div>
            </div>
        );
    }
}

export default GameCard;