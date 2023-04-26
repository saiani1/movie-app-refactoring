import React, { useRef, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import styles from './MovieSearchInputWrap.module.scss'
import { SearchIcon, UserIcon } from 'assets/svgs/index'
import { enteredMovieName } from 'states/movie'

const MovieSearchInputWrap = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [, setEnterMovieName] = useRecoilState(enteredMovieName)

  const searchMovieHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (inputRef.current != null) {
        setEnterMovieName(inputRef.current.value)
      }
    },
    [setEnterMovieName]
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
