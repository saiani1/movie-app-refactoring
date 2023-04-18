import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { IMovie } from 'types/movie.d'
import { likeMovieNameState, localstorageListMovieState } from 'states/movie'
import { LikeIcon } from 'assets/svgs/index'

import styles from './MovieItem.module.scss'

interface Props {
  movie: IMovie
}

const MovieItem = ({ movie }: Props) => {
  const [localstorageListMovie, setLocalstorageListMovie] = useRecoilState(localstorageListMovieState)
  const [, setLikeMovie] = useRecoilState(likeMovieNameState)
  const [clickedMovie, setClickedMovie] = useState<boolean>(false)
  const [selectedMovie, setSelectedMovie] = useState<string>()

  let isLike = false

  if (localstorageListMovie.find((item) => item.Title === selectedMovie)) {
    isLike = true
  } else {
    isLike = false
  }

  let savedLocalStorage = false

  if (localstorageListMovie.find((item) => item.Title === movie.Title)) {
    savedLocalStorage = true
  } else {
    savedLocalStorage = false
  }

  const movieClickHandler = (event: any) => {
    setClickedMovie(true)
    const tmp = event.target.innerText
    const arr = []
    arr.push(tmp.split('\n'))
    setSelectedMovie(arr[0][0])
  }

  const addBookmarkHandler = () => {
    if (selectedMovie !== undefined) {
      setLikeMovie(selectedMovie)
      setClickedMovie(false)
    }
  }

  const removeBookmarkHandler = () => {
    let tmpLocalStorageMovie: object[]
    // eslint-disable-next-line prefer-const
    tmpLocalStorageMovie = localstorageListMovie.filter((item) => item.Title !== selectedMovie)

    localStorage.setItem('likeMovie', JSON.stringify(tmpLocalStorageMovie))
    setLocalstorageListMovie(JSON.parse(localStorage.getItem('likeMovie') || ''))
    setClickedMovie(false)
  }

  const cancleBtnClickHandler = () => {
    setClickedMovie(false)
  }

  return (
    <li className={styles.movieList}>
      <button type='button' className={styles.movieBtn} onClick={movieClickHandler}>
        <div className={styles.posterWrap}>
          <img src={movie.Poster} className={styles.moviePoster} alt={movie.Title} />
        </div>
        <div className={styles.movieDetailWrap}>
          <h3 className={styles.movieTitle}>{movie.Title}</h3>
          {savedLocalStorage && <LikeIcon className={styles.likeIcon} />}
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
          <div className={styles.modal}>
            {isLike ? (
              <button type='button' className={styles.allowCancel} onClick={removeBookmarkHandler}>
                즐겨찾기취소
              </button>
            ) : (
              <button type='button' className={styles.allow} onClick={addBookmarkHandler}>
                즐겨찾기
              </button>
            )}
            <button type='button' className={styles.cancel} onClick={cancleBtnClickHandler}>
              취소
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default MovieItem
