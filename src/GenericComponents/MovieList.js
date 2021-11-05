import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import { teal } from '@mui/material/colors'
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    img: {
        width: "14em",
        height: "14em"
    },
    imgHover: {
        width: "16em",
        height: "16em"
    },
    title: {
        marginTop: "-1em",
        maxHeight: "3em",
        backgroundColor: teal[200],
        opacity: ".8",
        display: "flex",
        paddingLeft: "2px",
        paddingRight: "2px",
        alignItems: "center",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    titleHover: {
        marginTop: "-1em",
        backgroundColor: teal[300],
        opacity: ".8",
        display: "block",
        paddingLeft: "2px",
        paddingRight: "2px",
        paddingBottom: "2px",
        alignItems: "center",
        fontWeight: "bolder",
        justifyContent: "space-between",
        fontSize: "1vw"
    }
}))

export const MovieList = (props) => {

    useEffect(() => {
        try {
            axios.get(props.apiUrl).then((resp => {
                window.localStorage.setItem("selectedMovie", resp.data.results[1].id)
                setLoading(false);
                setItemData(resp.data.results)
            }))
        } catch (error) {
            alert("Network hatası!")
        }
        // eslint-disable-next-line
    }, [])
    

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    const handleLeft = () => {
        let arr = [];
        arr.push(itemData[itemData.length - 1]);
        arr = arr.concat(itemData.slice(0, itemData.length - 1));
        setItemData(arr);
    }

    const handleRight = () => {
        let arr = itemData.slice(1);
        arr.push(itemData[0]);
        setItemData(arr);
    }

    if (loading) return <LinearProgress />

    return (
        <div style={{ display: "flex", flexDirection: "row", width: "99%", overflow: "hidden", alignItems: "center" }}>
            <LeftIcon handle={handleLeft} />
            <RightIcon handle={handleRight} />
            <div style={{ paddingLeft: "1em", paddingRight: "1em", display: "flex" }}>
                {itemData.map((item, index) => (
                    <Link to="details" style={{ textDecoration: 'none', color: "#fff" }} onClick={() => {window.localStorage.setItem("selectedMovie", item.id)}}>
                        <div style={{ padding: ".5em", cursor: "pointer" }} onMouseEnter={() => { setHover(index) }} onMouseLeave={() => { setHover(-1) }} >
                            <img className={hover === index ? classes.imgHover : classes.img}
                                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                alt={item.title}
                            />
                            {hover === index
                                ? <div className={classes.titleHover}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        {item.title}
                                        <p style={{ fontSize: "0.7vw" }}> {item.vote_average}⭐</p>
                                    </div>
                                    <u style={{ fontSize: "0.55vw", display: "flex", justifyContent: "end" }}> Vizyon: {item.release_date} </u>
                                </div>
                                : <div className={classes.title}>
                                    <p>{item.title}</p>
                                </div>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default MovieList;