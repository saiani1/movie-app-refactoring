import { Suspense } from 'react'
import toast from 'react-hot-toast'

import styles from './MovieSearch.module.scss'
import MovieSearchInputWrap from '../components/contents/MovieSearchInputWrap'
import MovieList from 'components/contents/MovieList'
import Loading from 'components/UI/Loading'
// import useIntersectionObserver from 'hooks/useIntersectionObserver'

const MovieSearch = () => {
  // const [page, setPage] = useState<number>(1)
  // const [totalReselts, setTotalReselts] = useState(0)
  // const [readMore, setReadMore] = useState(false)

  // const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
  //   if (Math.ceil(totalReselts / 10) < page) return
  //   if (isIntersecting) {
  //     console.log('isIntersecting')
  //     setPage((prev) => prev + 1)
  //     setReadMore(false)
  //   } else {
  //     console.log('isnt Intersecting')
  //     setReadMore(true)
  //   }
  // }

  // const { targetRef } = useIntersectionObserver({ onIntersect })

  return (
    <main className={styles.wrap}>
      <MovieSearchInputWrap />
      <Suspense fallback={<Loading />}>
        <MovieList />
      </Suspense>
      {/* {readMore && <span ref={targetRef}>하이</span>} */}
    </main>
  )
}

export default MovieSearch
