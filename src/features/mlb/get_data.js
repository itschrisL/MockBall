import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

function MlbData() { 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&season='2022'";
        const options = {
            "method": "GET",
            "headers": {
                "sport_code": "mlb",
                "season": "2022"
            }
        };

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                const teams = {}

                console.log(result)
                
                for (const [key, val] of Object.entries(result.team_all_season.queryResults.row)) {
                    if (val.mlb_org_abbrev && val.mlb_org_abbrev != "OOC") {
                        teams[val.mlb_org_abbrev] = val
                    }
                }
                console.log(teams)
                console.log(Object.keys(teams).length)
                setItems(teams);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else {
        return (
            <table>
                <th>Team Name</th>
                <th>Testing</th>
            </table>
            // <ul>
            //     <li>
            //         Teams
            //     </li>
            //     {Object.entries(items).map((key, index) => (
            //         <li>
            //             <p id={key[1].team_id}>{key[1].name_display_long}</p>
            //         </li>
            //     ))}

            // </ul>
        )
    }
}

export default MlbData;