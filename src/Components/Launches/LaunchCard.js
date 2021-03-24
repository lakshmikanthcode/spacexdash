import { Card, Typography, Chip } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 10
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function LaunchCard(props) {

    let data = props.data
const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <Typography variant="body1">
                {data.mission_name}<Chip label={data.flight_number } size="small" variant="outlined"/>
                </Typography>
                
            </Card>
        </div>
    )
}

export default LaunchCard
