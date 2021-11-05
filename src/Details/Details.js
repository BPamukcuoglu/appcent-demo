import { blueGrey } from '@mui/material/colors'
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import axios from "axios";
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';


const useStyle = makeStyles(() => ({
    root: {
        backgroundColor: blueGrey[900],
        padding: "1em",
        paddingLeft: "2em",
        minHeight: "48.6em",
        width: "100uv"
    },
    topPaper: {
        display: "flex",
        width: "100uv",
        height: "7uv",
        justifyContent: "space-between",
        paddingBottom: "1em",
    },
    border: {
        borderStyle: "dashed",
        borderColor: "#fff",
        padding: "2em",
        color: "#fff"
    },
    borderThin: {
        borderStyle: "dashed",
        borderColor: "#fff",
        borderWidth: ".1em",
        paddingLeft: ".5em",
        paddingRight: "1em",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between"
    },
    img: {
        padding: "0.3em",
        height: "24em",
        cursor: "pointer"
    }
}))

export const Details = () => {

    useEffect(() => {
        try {
            axios.get(`https://api.themoviedb.org/3/movie/${window.localStorage.getItem("selectedMovie")}?api_key=45e7c82f0d8087539a17f68974cb007d&language=en-US`).then((resp => {
                setData(resp.data);
                setLoading(false);
            }))
            axios.get(`https://api.themoviedb.org/3/movie/${window.localStorage.getItem("selectedMovie")}/videos?api_key=45e7c82f0d8087539a17f68974cb007d&language=en-US`).then((resp) => {
                resp.data.results.forEach(element => {
                    if (element.site === "YouTube") setVideo(element.key);
                    else setVideo("null")
                })
            })
            axios.get(`https://api.themoviedb.org/3/movie/${window.localStorage.getItem("selectedMovie")}/credits?api_key=45e7c82f0d8087539a17f68974cb007d&language=en-US`).then((resp => {
                setCast(resp.data.cast.slice(0, 11));
            }))
        } catch (error) {
            alert("Network hatası!")
        }
        // eslint-disable-next-line
    }, [])


    const classes = useStyle();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});
    const [video, setVideo] = useState("");
    const [cast, setCast] = useState([{}]);

    if (loading || !video || !cast) return <LinearProgress />

    return (
        <div className={classes.root}>
            <div className={classes.border}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1>{data.title}</h1>
                    <h1 style={{ color: data.vote_average > 6 ? "#FFDF00" : "#B30000" }}>{data.vote_average}/10</h1>
                </div>
                <div className={classes.topPaper}>
                    <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" className={classes.img} onClick={() => { window.open(`https://image.tmdb.org/t/p/original/${data.poster_path}`, "_blank") }}></img>
                    <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" className={classes.img} onClick={() => { window.open(`https://image.tmdb.org/t/p/original/${data.backdrop_path}`, "_blank") }}></img>
                    {video !== "null"
                        ? <iframe style={{ height: "24em", width: "33%" }}
                            src={`https://www.youtube.com/embed/${video}`}
                            title="youtube"
                        >
                        </iframe>
                        : <img alt="" src={`https://image.tmdb.org/t/p/original/${data.belongs_to_collection?.backdrop_path}`} className={classes.img} onClick={() => { window.open(`https://image.tmdb.org/t/p/original/${data.backdrop_path}`, "_blank") }}></img>}
                </div>
                {data.genres.map(genre => (
                    <Chip label={genre.name} variant="filled" color="primary" style={{ padding: ".5em", margin: ".2em" }} />
                ))}
                <br />
                <br />
                <div className={classes.borderThin} >
                    <div style={{ display: "flex" }}>
                        <div style={{ maxWidth: "66%" }}>
                            <h4>Overview:</h4>
                            <p>
                                {data.overview}
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                                <div>
                                    <h4>Producer:</h4>
                                    {data.production_companies.map(comp => (
                                        <p>{comp.name}, {comp.origin_country}</p>
                                    ))}
                                </div>
                                <div>
                                    <h4>Ratings:</h4>
                                    <p>{data.vote_average}/10</p>
                                    <p> Total Votes: {data.vote_count}</p>
                                </div>
                                <div>
                                    <h4>Release:</h4>
                                    <p>{data.release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Cast: </h4>
                        <div style={{ display: "flex" }}>
                        <ul>
                            {cast.slice(0,5).map(person => (<li>{person.character}: {person.name}</li>))}
                        </ul>
                        <ul>
                            {cast.slice(5,11).map(person => (<li>{person.character}: {person.name}</li>))}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )



}


export default Details;