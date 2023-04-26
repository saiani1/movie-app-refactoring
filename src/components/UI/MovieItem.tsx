import { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import styles from './MovieItem.module.scss'
import { IMovie } from 'types/movie.d'
import { likeMovieNameState, storedMovieListState } from 'states/movie'
import { LikeIcon } from 'assets/svgs/index'
import ClickMovieModal from './ClickMovieModal'

interface Props {
  movie: IMovie
}

const MovieItem = ({ movie }: Props) => {
  const [storedMovieList, setStoredMovieList] = useRecoilState(storedMovieListState)
  const [, setLikeMovie] = useRecoilState(likeMovieNameState)
  const [clickedMovie, setClickedMovie] = useState<boolean>(false)
  const [selectedMovie, setSelectedMovie] = useState<string>()

  // if (localstorageListMovie.find((item) => item.Title === selectedMovie)) {
  //   isLike = true
  // } else {
  //   isLike = false
  // }

  // let savedLocalStorage = false

  // if (localstorageListMovie.find((item) => item.Title === movie.Title)) {
  //   savedLocalStorage = true
  // } else {
  //   savedLocalStorage = false
  // }

  const movieClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setClickedMovie(true)

    // setClickedMovie(true)
    // const tmp = e.target.innerText
    // const arr = []
    // arr.push(tmp.split('\n'))
    // setSelectedMovie(arr[0][0])
  }, [])

  return (
    <li className={styles.movieList}>
      <button type='button' className={styles.movieBtn} onClick={movieClickHandler}>
        <div className={styles.posterWrap}>
          <img src={movie.Poster} className={styles.moviePoster} alt={movie.Title} />
        </div>
        <div className={styles.movieDetailWrap}>
          <h3 className={styles.movieTitle}>{movie.Title}</h3>
          {/* {savedLocalStorage && <LikeIcon className={styles.likeIcon} />} */}
          <div className={styles.movieText}>
            <dl>
              <dt>Year</dt>
              <dd className={styles.movieReleaseYear}>{movie.Year}</dd>
            </dl>
            <dl>
              <dt>Type</dt>
              <dd className={styles.movieType}>{movie.Type}</dd>
            </dl>
          </div>
        </div>
      </button>
      {clickedMovie && <ClickMovieModal setClickedMovie={setClickedMovie} />}
    </li>
  )
}

export default MovieItem
