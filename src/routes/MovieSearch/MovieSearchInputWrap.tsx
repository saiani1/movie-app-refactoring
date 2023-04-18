import React, { useRef, useCallback } from 'react'
import toast from 'react-hot-toast'

import styles from './MovieSearchInputWrap.module.scss'
import { getMovieListApi } from 'services/movie'
import { SearchIcon, UserIcon } from 'assets/svgs/index'
import { IMovie } from 'types/movie'

interface IProps {
  page: number
  setData: React.Dispatch<React.SetStateAction<IMovie[] | undefined>>
}

const MovieSearchInputWrap = ({ page, setData }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const searchMovieHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (inputRef.current != null) {
        const enterMovie = inputRef.current.value
        getMovieListApi({
          s: enterMovie,
          page,
        }).then((res) => {
          if (res.data.Response === 'True') setData(res.data.Search)
          else toast.error(res.data.Error)
        })
      }
    },
    [page, setData]
  )

  return (
    <form className={styles.fixedWrap} onSubmit={searchMovieHandler}>
      <div className={styles.userInfoWrap}>
        <div className={styles.greetingTextWrap}>
          <h1 className={styles.mainText}>
            Welcome to <span>App!</span>
          </h1>
          <span className={styles.subText}>Book your favorite movie</span>
        </div>
        <div className={styles.userIconWrap}>
          <UserIcon className={styles.userIcon} />
        </div>
      </div>
      <div className={styles.searchWrap}>
        <input type='text' className={styles.searchInput} ref={inputRef} placeholder='Search' />
        <button type='submit' className={styles.submitBtn}>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </div>
    </form>
  )
}

export default MovieSearchInputWrap
