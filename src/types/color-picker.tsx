import {ColorObject} from "./"

export interface Language {
    save: string
    cancel: string
}

export type SetValue$ = (val:string, col:ColorObject, changeType:number) => void