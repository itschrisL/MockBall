import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import GetTeams from '../mlb/mlb_data';

import MlbData from '../mlb/get_data';

const Teams = () => {
    const teams = GetTeams();
    return (
        <div>
            <table class="table table-hover text-start">
                <thead>
                    <tr>
                        <th scope="col">Team</th>
                        <th scope="col">Leauge</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(teams).map((key, index) => ( 
                        <tr id={key[1].team_id}>
                            <td>{key[1].name_display_long}</td>
                            <td>{key[1].league_abbrev}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Teams;