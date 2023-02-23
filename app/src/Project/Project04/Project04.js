import React, { useEffect, useState } from 'react'
import '../../App.css'
import AnimeCard from './Components/AnimeCard'
export default function Project04() {
    const [images, setImages] = useState([])
    const [typeAnime, setTypeAnime] = useState("")
    const [query, setQuery] = useState("wave")
    const URL = `https://nekos.best/api/v2/${query}?amount=4`
    const options =
        [{ value: "highfive", label: "highfive" },
        { value: "happy", label: "happy" },
        { value: "sleep", label: "sleep" },
        { value: "handhold", label: "handhold" },
        { value: "laugh", label: "laugh" },
        { value: "bite", label: "bite" },
        { value: "poke", label: "poke" },
        { value: "tickle", label: "tickle" },
        { value: "kiss", label: "kiss" },
        { value: "wave", label: "wave" },
        { value: "thumbsup", label: "thumbsup" },
        { value: "stare", label: "stare" },
        { value: "cuddle", label: "cuddle" },
        { value: "smile", label: "smile" },
        { value: "baka", label: "baka" },
        { value: "blush", label: "blush" },
        { value: "nom", label: "nom" },
        { value: "think", label: "think" },
        { value: "pout", label: "pout" },
        { value: "facepalm", label: "facepalm" },
        { value: "wink", label: "wink" },
        { value: "shoot", label: "shoot" },
        { value: "smug", label: "smug" },
        { value: "nope", label: "nope" },
        { value: "cry", label: "cry" },
        { value: "pat", label: "pat" },
        { value: "nod", label: "nod" },
        { value: "punch", label: "punch" },
        { value: "dance", label: "dance" },
        { value: "feed", label: "feed" },
        { value: "shrug", label: "shrug" },
        { value: "bored", label: "bored" },
        { value: "kick", label: "kick" },
        { value: "hug", label: "hug" },
        { value: "yeet", label: "yeet" },
        { value: "slap", label: "slap" },
        { value: "neko", label: "neko" },
        { value: "husbando", label: "husbando" },
        { value: "kitsune", label: "kitsune" },
        { value: "waifu", label: "waifu" },
        ]
    useEffect(() => {
        getAnimeType();
    }, [query])
    const getAnimeType = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setImages(data.results);
    }
    const onSubmitType = (event) => {
        event.preventDefault();
        setQuery(typeAnime)
    }
    return (

        <div className='App'>
            <form className='search-bar' onSubmit={onSubmitType}>
                <label>Choose a Category:</label>
                <select className='search-btn' value={typeAnime} onChange={(e) => {
                    setTypeAnime(e.target.value)
                }}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <button className='search-btn' type="submit" value="Search" >search</button>
            </form>
            <div className='list'>
                <h4>{query}</h4>
                {images.length > 0 ?
                    images.map((image,index) =>
                        <AnimeCard key={index} anime_name={image.anime_name} url={image.url} />
                    ) :
                    <p>No Animes</p>
                }
            </div>
        </div>
    )
}
