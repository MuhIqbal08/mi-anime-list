import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../Api";
import AnimeList from "../AnimeList";
import HeaderMenu from "../Utilities/HeaderMenu"
import Pagination from "../Utilities/Pagination"

const Popular = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        getAnimeResponse("top/anime", `page=${page}`).then((result) => {
            setTopAnime(result);
        })
    }, [page])  

    return (
        <>
            <HeaderMenu title={`Popular Anime Page ${page}`}/>
            <AnimeList api={topAnime} />
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
        </>
    )
}

export default Popular