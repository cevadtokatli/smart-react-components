import { createSlice } from '@reduxjs/toolkit'
import { MovieList } from '../types/movie'

export type ListState = MovieList

const initialState: ListState = typeof window !== 'undefined' ? window.__INITIAL_STATE__.list : []

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => action.payload,
  },
})

export const { setList } = listSlice.actions

export default listSlice.reducer
