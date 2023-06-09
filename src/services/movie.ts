import axios from 'axios'

const MOVIE_BASE_URL = 'http://www.omdbapi.com'

interface Params {
  s: string
  page: number
}

export const getMovieListApi = async (params: Params) => {
  const response = await axios.get(`${MOVIE_BASE_URL}`, {
    params: {
      apikey: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })
  return response.data.Search
}
