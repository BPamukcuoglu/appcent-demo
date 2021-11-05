import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { teal } from '@mui/material/colors'

const useStyles = makeStyles(() => ({
    btn: {
        width: "60px",
        position: "absolute",
        display: "flex",
        opacity: "0",
        right: "0px",
    },
    btnHover: {
        width: "60px",
        height: "120px",
        background: teal[50],
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        right: "0px",
        opacity: ".8",
    }
}))

export const RightIcon = (props) => {

    const classes = useStyles()
    const [hover, setHover] = useState(false);

    return (
        <div className={hover ? classes.btnHover : classes.btn } onMouseEnter={() => {setHover(true)}} onClick={props.handle} onMouseLeave={() => {setHover(false)}} >
            <ArrowForwardIosIcon color="primary" />
        </div>
    );

}

export default RightIcon;