import { atom } from 'recoil'
import { IMovie } from 'types/movie.d'

export const storedMovieListState = atom<IMovie[]>({
  key: 'storedMovieListState',
  default: localStorage.getItem('likeMovie') !== null ? JSON.parse(localStorage.getItem('likeMovie') || '') : [],
})

export const likeMovieNameState = atom<string>({
  key: 'likeMovieNameState',
  default: undefined,
})
