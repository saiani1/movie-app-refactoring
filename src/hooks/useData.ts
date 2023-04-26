import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getMovieListApi } from 'services/movie'
import { enteredMovieName, moviePage } from 'states/movie'

const useData = () => {
  const movieName = useRecoilValue(enteredMovieName)
  const pageNum = useRecoilValue(moviePage)
  const params = {
    s: movieName,
    page: pageNum,
  }

  const { data } = useQuery(['movieData', params], () => getMovieListApi(params), {
    enabled: !!movieName,
    cacheTime: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
    retry: false,
    suspense: true,
  })
  return { data }
}

export default useData
