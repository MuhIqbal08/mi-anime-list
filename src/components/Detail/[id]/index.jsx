import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeResponse } from '../../../Api';
import VideoPlayer from '../../Utilities/VideoPlayer';

const DetailPage = () => {
  const { id } = useParams();
  // console.log(id)
  // const detailAnime = await getAnimeResponse(`anime/${id}`)
  const [detailAnime, setDetailAnime] = useState([]);

  useEffect(() => {
    getAnimeResponse(`anime/${id}/full`).then((result) => {
      setDetailAnime(result);
    });
  }, [id]);

  // console.log(detailAnime?.data?.rank)
  const anime = detailAnime?.data;
  console.log(anime);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-primary font-semibold">{anime?.title}</h3>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap md:justify-normal justify-center gap-2 text-primary">
        <div className="min-w-64 flex flex-col gap-2">
          <img src={anime?.images.webp.image_url} alt="" width={260} height={364} className="rounded object-cover w-full" />
          <div className="text-center rpounded bg-secondary font-semibold p-2">
            <p className="">Rating: {anime?.score} / 10</p>
          </div>
          <div className="bg-accent rounded md:min-w-64 min-w-full p-2 text-center text-dark font-semibold hover:bg-primary hover:text-dark transition-all">
            <button>Bookmark</button>
          </div>
        </div>
        <div className="text-justify md:text-base text-sm px-2">
          <p className="">
            Watch full episodes {anime?.title}, download {anime?.title} english subbed, {anime?.title} eng sub, download {anime?.title} eng sub, stream {anime?.title} at MyAnimeList.
          </p>
          <ul className="marker:text-accent list-inside list-disc pt-2">
            <li>Released: {anime?.aired.string} </li>
            <li>
              Licensors:{' '}
              {anime?.licensors &&
                anime.licensors.map((licencor, index) => (
                  <span key={licencor.mal_d}>
                    <a href={licencor.url} className="font-semibold hover:text-accent">
                      {licencor.name}
                    </a>
                    {index !== anime.licensors.length - 1 && ', '}
                  </span>
                ))}
            </li>
            <li>
              Studios:{' '}
              {anime?.studios &&
                anime.studios.map((studio, index) => (
                  <span key={studio.mal_id}>
                    <a href={studio.url} className="font-semibold hover:text-accent">
                      {studio.name}
                    </a>
                    {/* {index !== anime.studio.length - 1 && ', '} */}
                  </span>
                ))}
            </li>
            <li>Status: {anime?.status} </li>
            <li>Episodes: {anime?.episodes}</li>
            <li>
              Demogaphics:{' '}
              {anime?.demographics &&
                anime.demographics.map((demographic, index) => (
                  <span key={demographic.mal_id}>
                    <a href={demographic.url} className="font-semibold hover:text-accent">
                      {demographic.name}
                    </a>
                    {/* {index !== anime.studio.length - 1 && ', '} */}
                  </span>
                ))}
            </li>
            <li>Duration: {anime?.duration}</li>
            <li>Rank: {anime?.rank}</li>
            <li>Members: {anime?.members}</li>
            <li>Duration: {anime?.duration}</li>
          </ul>
          <div className="pt-2">
            <p> {anime?.background} </p>
          </div>
          <div className="flex gap-2 pt-2">
            {anime?.genres &&
              anime.genres.map((genre, index) => (
                <span key={genre.mal_id} className="md:text-base text-sm rounded border border-accent text-accent p-1 hover:bg-accent hover:text-dark transition-all">
                  <a href={`anime/genres/${genre.name}`} className="font-semibold">
                    {genre.name}
                  </a>
                  {/* {index !== anime.studio.length - 1 && ', '} */}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="pt-4 px-6 text-primary">
        <h3 className="text-xl">Synopsis</h3>
        <p className="text-justify md:text-base text-sm">{anime?.synopsis}</p>
      </div>

      <div>{/* <VideoPlayer youtubeId={anime?.trailer.youtube_id} /> */}</div>
    </>
  );
};

export default DetailPage;
