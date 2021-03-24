import React, {useState, useEffect} from 'react'
import LaunchCard from './LaunchCard'
import axios from 'axios'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: 10,
    }
  });

export default function LaunchesList(props) {
    
    const [launches, setLaunches] = useState([]);
const classes = useStyles()

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/launches")
            .then(res => {
                setLaunches(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        return () => {
            // cleanup
        }
    }, ["input"])

    

    return (
        <div>
            <Grid container spacing={2} className={classes.container}>
            {
                launches.map((item, i) => (
                    <Grid item xs={4}>
                        <LaunchCard data={item}/>
                    </Grid>
                    
                ))
            }
            </Grid>
            
        </div>
    )
}