import { createSlice } from '@reduxjs/toolkit'
import { MovieDetail } from '../types/movie'

export type DetailState = Partial<MovieDetail>

const initialState: DetailState = typeof window !== 'undefined' ? window.__INITIAL_STATE__.detail : {} 

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setMovieDetail: (state, action) => action.payload,
  },
})

export const { setMovieDetail } = detailSlice.actions

export default detailSlice.reducer
