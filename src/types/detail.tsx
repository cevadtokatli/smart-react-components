import {MovieDetail} from "./movie"

export const GET = "DETAIL_GET"

export interface Get {
    type: typeof GET
    payload: MovieDetail
}

export type All = Get