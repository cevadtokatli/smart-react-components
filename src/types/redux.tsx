import {MovieList, MovieDetail} from "./movie"

export interface ReduxStore {
    list: MovieList
    detail: MovieDetail
}