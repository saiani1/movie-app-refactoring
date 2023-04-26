import styles from './MovieList.module.scss'
import useData from 'hooks/useData'
import MovieItem from 'components/UI/MovieItem'
import { IMovie } from 'types/movie'

const MovieList = () => {
  const { data } = useData()
  console.log(data)

  return (
    <ul className={styles.movieItemWrap}>
      {data ? (
        data.map((movie: IMovie) => <MovieItem key={movie.imdbID} movie={movie} />)
      ) : (
        <span className={styles.errorText}>검색 결과가 없습니다.</span>
      )}
    </ul>
  )
}

export default MovieList
