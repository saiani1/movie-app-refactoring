import React, { useCallback } from 'react'

import styles from './ClickMovieModal.module.scss'

interface IProps {
  setClickedMovie: React.Dispatch<React.SetStateAction<boolean>>
}

const ClickMovieModal = ({ setClickedMovie }: IProps) => {
  let isLike = false

  const btnClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { name } = e.target as HTMLButtonElement
      // if (name === 'like')
      if (name === 'cancel') setClickedMovie(false)
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
    },
    [setClickedMovie]
  )

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal} role='presentation' onClick={btnClickHandler}>
        {isLike ? (
          <button type='button' name='likeCancel' className={styles.allowCancel}>
            즐겨찾기취소
          </button>
        ) : (
          <button type='button' name='like' className={styles.allow}>
            즐겨찾기
          </button>
        )}
        <button type='button' name='cancel' className={styles.cancel}>
          취소
        </button>
      </div>
    </>
  )
}

export default ClickMovieModal
