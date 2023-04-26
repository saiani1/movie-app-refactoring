import { useRecoilValue } from 'recoil'

import styles from './MovieBookmark.module.scss'
import { IMovie } from 'types/movie.d'
import { storedMovieListState } from 'states/movie'
import MovieItem from 'components/UI/MovieItem'

const MovieBookmark = () => {
  const storedMovieList = useRecoilValue(storedMovieListState)

  return (
    <main className={styles.wrap}>
      <h3 className={styles.title}>내 즐겨찾기</h3>
      <ul>
        {storedMovieList.length !== 0 && storedMovieList.find((movie) => movie !== null) ? (
          storedMovieList.map((movie: IMovie) => {
            return <MovieItem key={movie.imdbID} movie={movie} />
          })
        ) : (
          <li className={styles.errorText}>즐겨찾기한 영화가 없습니다.</li>
        )}
      </ul>
    </main>
  )
}

export default MovieBookmark
