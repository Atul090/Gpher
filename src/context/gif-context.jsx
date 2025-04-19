import { createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const GifContext = createContext();

const GifProvider = ({ children }) => {

    const [gifs,setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favourites, setFavourites] = useState([]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY); 
    //to avoid prop drilling
    return <GifContext.Provider value={{gf,gifs,setGifs,filter,setFilter,favourites,setFavourites}}> {children} </GifContext.Provider>
}

export const GifState = () => {
    return useContext(GifContext);
}

export default GifProvider;

