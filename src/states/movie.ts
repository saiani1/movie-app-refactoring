import { atom } from 'recoil'
import { IMovie } from 'types/movie.d'

export const enteredMovieName = atom<string>({
  key: 'enteredMovieName',
  default: '',
})

export const moviePage = atom<number>({
  key: 'moviePage',
  default: 1,
})

export const storedMovieListState = atom<IMovie[]>({
  key: 'storedMovieListState',
  default: localStorage.getItem('likeMovie') !== null ? JSON.parse(localStorage.getItem('likeMovie') || '') : [],
})

export const likeMovieNameState = atom<string>({
  key: 'likeMovieNameState',
  default: undefined,
})
