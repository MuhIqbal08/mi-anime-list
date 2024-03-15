import { Link } from 'react-router-dom';
import '../../App.css';

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api.data?.map((anime) => {
          const id = anime.mal_id

          return (
            <div key={anime.mal_id}>
              <Link to={`/anime/${id}`} className="text-primary hover:text-accent transition-all">
                <img src={anime.images.webp.image_url} alt="" width={350} height={350} className="w-full max-h-64 object-cover" />
                <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AnimeList;
