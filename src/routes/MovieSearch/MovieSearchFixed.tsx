import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'

import styles from './MovieSearchFixed.module.scss'

import { enteredMovieNameState } from 'states/movie'
import { SearchIcon, UserIcon } from 'assets/svgs/index'

const MovieSearchFixed = () => {
  const [, setEnteredMovie] = useRecoilState(enteredMovieNameState)
  const inputRef = useRef<HTMLInputElement>(null)

  const searchMovieHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputRef.current != null) {
      const enterMovie = inputRef.current.value
      setEnteredMovie(enterMovie)
      inputRef.current.value = ''
    }
  }

  return (
    <form className={styles.fixedWrap} onSubmit={searchMovieHandler}>
      <div className={styles.userInfoWrap}>
        <div className={styles.greetingTextWrap}>
          <p className={styles.mainText}>
            Welcome to <span>App!</span>
          </p>
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

export default MovieSearchFixed
