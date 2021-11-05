import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { teal } from '@mui/material/colors'

const useStyles = makeStyles(() => ({
    btn: {
        width: "60px",
        position: "absolute",
        display: "flex",
        opacity: "0",
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
        opacity: ".8",
    }
}))

export const LeftIcon = (props) => {

    const classes = useStyles()
    const [hover, setHover] = useState(false);

    return (
        <div className={hover ? classes.btnHover : classes.btn } onMouseEnter={() => {setHover(true)}} onClick={props.handle} onMouseLeave={() => {setHover(false)}} >
            <ArrowBackIosIcon color="primary" />
        </div>
    );

}

export default LeftIcon;