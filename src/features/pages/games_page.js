import React from 'react';
import styled from 'styled-components';
import GetGamesDay from '../mlb/get_games';
import GameCard from '../components/game/game_card';

const GamePage = () => {
    const games = GetGamesDay();
    return (
        <div class="justify-content-center align-items-center">
            {Object.entries(games).map((key, index) => (
                <GameCard home_team={key[1].away_team_full} away_team={key[1].home_team_full} date={key[1].game_time_local} />
            ))}
        </div>
        
    );
}

// /json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id='player_id'
// /json/named.roster_40.bam?team_id='121'
export default GamePage;