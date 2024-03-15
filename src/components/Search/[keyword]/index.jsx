import { useParams } from "react-router-dom"
import '../../../App.css';
import AnimeList from '../../AnimeList';
import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../AnimeList/Header';
import { getAnimeResponse } from "../../../Api";
// import Loader from "../../Loader";

// const Header = React.lazy(() => import('../../AnimeList/Header'));
// const AnimeList = React.lazy(() => import('../../AnimeList'));

const Page = () => {
  const [searchAnime, setSearchAnime] = useState([])
  const { keyword } = useParams()
  const decodedKeyword = decodeURI(keyword)

  useEffect(() => {
    getAnimeResponse("anime", `q=${decodedKeyword}`).then((result) => {
      setSearchAnime(result)
    })
  }, [decodedKeyword]);


  return (
    <>
      <section>
        <Header title={`Hasil Pencarian ${decodedKeyword} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
