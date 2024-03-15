import axios from 'axios';

const getAnimeResponse = async (parameter, query) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASEURL}/${parameter}?${query}`,
    headers: {
      accept: 'application/json',
    },
  };

  const response = await axios.request(options);
  const results = response.data;
  return results;
  // console.log(response)
};

const getRecommendedAnime = async (parameter, objectProperty) => {
  const response = await getAnimeResponse(parameter);
  return response.data.flatMap((item) => item[objectProperty]);
};

const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last)
  }

  return response
};

export { getAnimeResponse, getRecommendedAnime, reproduce };
