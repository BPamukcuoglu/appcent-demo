import { useEffect, useState } from "react";

export const Jumbotron = () => {
    const [random, setRandom] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRandom(Math.floor(Math.random() * itemData.length))
        }, 3000)
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div style={{display:"flex", justifyContent: "center"}}>
            <img
                height="240px"
                width="90%"
                src={`${itemData[random].img}`}
                alt={itemData[random].title}
                loading="lazy"
            />
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.sharefaith.com/images/3/1357769977215_16/img_mouseover3.jpg',
        title: 'banner1',
    },
    {
        img: 'https://previews.123rf.com/images/tarikvision/tarikvision2001/tarikvision200100001/137626249-online-movie-time-mobile-movie-theater-cinematography-and-filmmaking-ticket-ordering-vector-template.jpg',
        title: 'banner2',
    },
];

export default Jumbotron;