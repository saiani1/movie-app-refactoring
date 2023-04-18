import { useState } from 'react'

import styles from './MovieSearch.module.scss'
import { IMovie } from 'types/movie.d'
import MovieItem from '../../components/UI/MovieItem'
import MovieSearchInputWrap from './MovieSearchInputWrap'

const MovieSearch = () => {
  const [data, setData] = useState<IMovie[]>()
  const [page, setPage] = useState<number>(1)

  // useEffect(() => {
  //   if (likeMovie !== '') {
  //     let tmpLocalStorageMovie: object[]
  //     const bookmarkMovieObject: any = data?.Search.find((movie) => movie.Title === likeMovie)

  //     if (localstorageListMovie[0] !== null && bookmarkMovieObject !== undefined) {
  //       tmpLocalStorageMovie = [...localstorageListMovie, bookmarkMovieObject]
  //     } else tmpLocalStorageMovie = [bookmarkMovieObject]

  //     if (tmpLocalStorageMovie[0] !== undefined) {
  //       localStorage.setItem('likeMovie', JSON.stringify(tmpLocalStorageMovie))
  //       setLocalstorageListMovie(JSON.parse(localStorage.getItem('likeMovie') || ''))
  //       setLikeMovie('')
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [likeMovie])

  return (
    <main className={styles.wrap}>
      <MovieSearchInputWrap page={page} setData={setData} />
      <ul className={styles.movieItemWrap}>
        {data ? (
          data.map((movie: IMovie) => <MovieItem key={movie.imdbID} movie={movie} />)
        ) : (
          <span className={styles.errorText}>검색 결과가 없습니다.</span>
        )}
      </ul>
    </main>
  )
}

export default MovieSearch
