import Jumbotron from "./Jumbotron";
import MovieList from "../GenericComponents/MovieList";
import { makeStyles } from '@mui/styles';
import { blueGrey } from '@mui/material/colors'
import { Divider } from "@mui/material";


const useStyles = makeStyles(() => ({
    root: {
        display: "block",
        paddingTop: "2%",
        width: "100%",
        paddingBottom: "12em",
        justifyContent: "center",
        height: "8%",
        color: "#fff",
        overflow: "hidden",
        backgroundColor: blueGrey[900]
    }
}))

export const HomePage = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Jumbotron></Jumbotron>
            <br />
            <Divider />
            <h2 style={{ paddingLeft: "1em" }}> Popüler Filmler </h2>
            <div style={{ height: "18em" }}>
                <MovieList apiUrl={"https://api.themoviedb.org/3/movie/popular?api_key=45e7c82f0d8087539a17f68974cb007d&language=en-US&page=1"} />
            </div>
            <h2 style={{ paddingLeft: "1em", paddingTop: "2em" }}> En Sevilen Filmler </h2>
            <div style={{ height: "18em" }}>
                <MovieList apiUrl={"https://api.themoviedb.org/3/movie/top_rated?api_key=45e7c82f0d8087539a17f68974cb007d&language=en-US&page=1"} />
            </div>
        </div>
    )

}


export default HomePage;