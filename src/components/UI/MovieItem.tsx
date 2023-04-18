import { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import styles from './MovieItem.module.scss'
import { IMovie } from 'types/movie.d'
import { likeMovieNameState, storedMovieListState } from 'states/movie'
import { LikeIcon } from 'assets/svgs/index'

interface Props {
  movie: IMovie
}

const MovieItem = ({ movie }: Props) => {
  const [storedMovieList, setStoredMovieList] = useRecoilState(storedMovieListState)
  const [, setLikeMovie] = useRecoilState(likeMovieNameState)
  const [clickedMovie, setClickedMovie] = useState<boolean>(false)
  const [selectedMovie, setSelectedMovie] = useState<string>()

  // let isLike = false

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

  const btnClickHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // const addBookmarkHandler = () => {
    //   if (selectedMovie !== undefined) {
    //     setLikeMovie(selectedMovie)
    //     setClickedMovie(false)
    //   }
    // }
    // const removeBookmarkHandler = () => {
    //   let tmpLocalStorageMovie: object[]
    //   // eslint-disable-next-line prefer-const
    //   tmpLocalStorageMovie = localstorageListMovie.filter((item) => item.Title !== selectedMovie)
    //   localStorage.setItem('likeMovie', JSON.stringify(tmpLocalStorageMovie))
    //   setLocalstorageListMovie(JSON.parse(localStorage.getItem('likeMovie') || ''))
    //   setClickedMovie(false)
    // }
    // const cancleBtnClickHandler = () => {
    //   setClickedMovie(false)
    // }
  }, [])

  const movieClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
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
      {clickedMovie && (
        <div className={styles.modalWrap}>
          <div className={styles.backdrop} />
          <div className={styles.modal} role='presentation' onClick={btnClickHandler}>
            {/* {isLike ? (
              <button type='button' className={styles.allowCancel}>
                즐겨찾기취소
              </button>
            ) : (
              <button type='button' className={styles.allow}>
                즐겨찾기
              </button>
            )}
            <button type='button' className={styles.cancel}>
              취소
            </button> */}
          </div>
        </div>
      )}
    </li>
  )
}

export default MovieItem
