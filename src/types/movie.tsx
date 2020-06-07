export interface MovieListItem {
    id: number
    title: string
}

export type MovieList = MovieListItem[]

export interface MovieDetail extends MovieListItem {
    summary: string
    picture: string
}
