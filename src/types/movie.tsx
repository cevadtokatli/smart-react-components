export interface MovieListItem {
  id: number
  title: string
}

export type MovieList = MovieListItem[]

export interface MovieDetail extends MovieListItem {
  image_path: string
  summary: string
}
