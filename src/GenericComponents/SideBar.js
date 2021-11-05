import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@mui/styles';
import { teal } from '@mui/material/colors'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        overflowX: "hidden",
        overflowY: "hidden"
    },
    drawerHead: {
        color: "#fff",
        backgroundColor: teal[300],
        height: "3.6em",
    }
}))

export const SideBar = (props) => {

    const classes = useStyles();

    return (
        <Drawer
            open={props.open}
            anchor="right"
            onClose={() => { props.setOpen(false) }}
            className={classes.root}
        >
            <ListItem className={classes.drawerHead}>
                <ListItemText primary={"AppCent Web Challenge"} />
            </ListItem>
            <List>
                <Link to="/" style={{ textDecoration: 'none', color: "#101010" }} >
                    <ListItem button >
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Ana Sayfa"} />
                    </ListItem>
                </Link>
                <Divider />

                <Link to="/details" style={{ textDecoration: 'none', color: "#101010" }} >
                    <ListItem button>
                        <ListItemIcon >
                            <TheatersIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Detaylar"} />
                    </ListItem>
                </Link>

                <Divider />
                <Link to="/about" style={{ textDecoration: 'none', color: "#101010" }} >
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Hakkında"} />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}

export default SideBar;