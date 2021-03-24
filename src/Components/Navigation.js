import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'

export default function Navigation(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    SpaceX Dash
                </Typography>
                
            </Toolbar>
        </AppBar>
    )
}