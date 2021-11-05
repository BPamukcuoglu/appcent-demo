import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles';
import { teal } from '@mui/material/colors';
import SideBar from "./SideBar";
import { useState } from "react";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "2%",
        paddingLeft: "2%",
        backgroundColor: teal[300],
        height: "4em"
    },
    menuIcon: {
        color: "white"
    }

}))

export default function Header() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <SideBar open={open} setOpen={setOpen} />
            <Grid className={classes.root} >
                <Link to="" style={{ textDecoration: 'none', color: "#101010" }} >
                    <p style={{ color: "#fff", fontWeight: "bolder", fontSize: "1.2vw" }}>
                        BP AppCent Demo
                    </p>
                </Link>
                <IconButton onClick={() => { setOpen(true) }}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
            </Grid>
        </>
    );
}