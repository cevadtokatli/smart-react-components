import fetch from "node-fetch"
import React from "react"
import {useSelector} from "react-redux"
import {createSelector} from "reselect"
import H1 from "smart-react-components/element/H1"
import Img from "smart-react-components/element/Img"
import Container from "smart-react-components/grid/Container"
import Row from "smart-react-components/grid/Row"
import Column from "smart-react-components/grid/Column"
import * as Action from "../types/detail"

const Detail = () => {
    const item = useSelector(createSelector(
        ({detail}) => detail,
        item => item
    ))

    if(!item)
        return <H1 mx="5">Movie not found!</H1>

    return (
        <Container>
            <Row>
                <Column col={12} colSm={6}>
                    <Img src={item.image_path} width="100%" />
                </Column>
                <Column col={12} colSm={6}>
                    <h2>{item.title}</h2>
                    <p>{item.synopsis}</p>
                </Column>
            </Row>
        </Container>
    )
}

Detail.get = (match, url, setPercentage, setCancelCallback, {store}) => new Promise<void>(resolve => {
    setPercentage(90) // start animating

    let ac: AbortController
    if(typeof AbortController !== "undefined")
        ac = new AbortController()
        
    setCancelCallback(() => ac.abort())

    fetch(`http://localhost:8080/movies/${match.params.id}`, {
        signal: ac ? ac.signal : null
    })
    .then(resp => resp.json())
    .then(resp => {
        setPercentage(100)
        store.dispatch({
            type: Action.GET,
            payload: resp.err ? null : resp
        }) 
    })
    .catch(err => console.error(err))
    .finally(() => resolve())
})

export default Detail