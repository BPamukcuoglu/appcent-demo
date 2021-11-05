import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles';
import { teal } from '@mui/material/colors'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        position: "relative",
        bottom: "0px",
        left: "0px",
        width: "100%",
        height: "4em",
        paddingLeft: "2%",
        paddingRight: "2%",
        justifyContent: "space-between",
        color: "#fff",
        backgroundColor: teal[100],
        alignContent:"center"
    },
    menuIcon: {
        color: "white"
    }

}))

export default function Footer() {

    const classes = useStyles();


    return (
        <Grid className={classes.root} >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton onClick={() => { window.open("https://www.instagram.com/bedirhanpamukcuoglu/", "_blank") }}>
                    <InstagramIcon className={classes.menuIcon} />
                </IconButton>
                <IconButton onClick={() => { window.open("https://www.twitter.com/", "_blank") }}>
                    <TwitterIcon className={classes.menuIcon} />
                </IconButton>
                <IconButton onClick={() => { window.open("https://www.facebook.com/", "_blank") }}>
                    <FacebookIcon className={classes.menuIcon} />
                </IconButton>
            </div>
            <h4 noWrap variant="subtitle1"  >
                AppCent Demo Movie App Challenge
            </h4>
            <IconButton onClick={() => { window.open("mailto:bedirhanpamukcuoglu@gmail.com?subject=AppCent Demo") }}>
                <EmailIcon className={classes.menuIcon} />
            </IconButton>
        </Grid>
    );
}