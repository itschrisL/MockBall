import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function GetTeams() {
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
                
                for (const [key, val] of Object.entries(result.team_all_season.queryResults.row)) {
                    if (val.mlb_org_abbrev && val.mlb_org_abbrev != "OOC") {
                        teams[val.mlb_org_abbrev] = val
                    }
                }
                console.log(teams)

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

    // Clean up the results
    const teams = {}
    console.log("TESTING")
    console.log(items)
    console.log("HEREEEEE")
    // for (const [key, val] of Object.entries(teams.team_all_season.queryResults.row)) {
    //     if (val.mlb_org_abbrev && val.mlb_org_abbrev != "OOC") {
    //         teams[val.mlb_org_abbrev] = val
    //     }
    // }

    if (error) {
        return error;
    } 
    else if (!isLoaded) {
        return isLoaded;
    } 
    else {
        return items;
    }
}

function name(params) {
    
}

export default GetTeams;