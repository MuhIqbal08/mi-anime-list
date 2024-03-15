import '../../App.css';
// import AnimeList from '../AnimeList';
import React, { Suspense, useEffect, useState } from 'react';
import Navbar from '../Navigation/Navbar';
import { Link } from 'react-router-dom';
import { getAnimeResponse, getRecommendedAnime, getTopManga, reproduce } from '../../Api';
// import Header from '../AnimeList/Header';
import Loader from '../Loader';

const AnimeList = React.lazy(() => import('../AnimeList'));
const Header = React.lazy(() => import('../AnimeList/Header'));
const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [recommendAnime, setRecommendAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topAnimeData = await getAnimeResponse("top/anime", "limit=8");
        const recommendAnimeData = await getRecommendedAnime("recommendations/anime", "entry");

        setTopAnime(topAnimeData);
        setRecommendAnime(recommendAnimeData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const recommendedAnime = reproduce(recommendAnime, 4)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <section>
          <Header title={'Paling Populer'} linkTitle={'Lihat Semua'} linkHref={'/popular'} />
          <AnimeList api={topAnime} />
        </section>
        <section>
          <Header title={'Rekomendasi Anime'} />
          <AnimeList api={recommendedAnime} />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
