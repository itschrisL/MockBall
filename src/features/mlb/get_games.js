import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function GetGamesDay() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        const date = `${year}${month}${day}`;
        console.log(date)
        
        // const url = `http://lookup-service-prod.mlb.com/json/named.mlb_broadcast_info.bam?src_type='TV'&src_comment='National'&tcid=mm_mlb_schedule&sort_by='game_time_et_asc'&home_away='h'&start_date='${date}'&end_date='${date}'&season='2022'`;
        const url = `http://lookup-service-prod.mlb.com/json/named.mlb_broadcast_info.bam?src_type='TV'&tcid=mm_mlb_schedule&sort_by='game_time_et_asc'&home_away='h'&start_date='${date}'&end_date='${date}'&season='2022'`;

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

                const games = {}

                if (result.mlb_broadcast_info.queryResults.totalSize == 0) {
                    setItems(games);
                }
                else {
                    for (const [key, val] of Object.entries(result.mlb_broadcast_info.queryResults.row)) {
                        if (!games.hasOwnProperty(val.game_id)) {
                            games[val.game_id] = val
                        }
                    }
                }
                
                setItems(games);
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

    console.log(items);
    
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

export default GetGamesDay;