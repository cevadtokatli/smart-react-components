import H1 from '@smart-react-components/core/Element/H1'
import Img from '@smart-react-components/core/Element/Img'
import Column from '@smart-react-components/ui/Grid/Column'
import Container from '@smart-react-components/ui/Grid/Container'
import Row from '@smart-react-components/ui/Grid/Row'
import React from 'react'
import { useSelector } from 'react-redux'
import { setMovieDetail } from '../redux/detail'

export const get = (match, url, setPercentage, setCancelCallback, { store }) => new Promise<void>(resolve => {
  setPercentage(90) // start animating

  let ac: AbortController

  if(typeof AbortController !== 'undefined') {
    ac = new AbortController()
    setCancelCallback(() => ac.abort())
  }

  fetch(`http://localhost:8080/movies/${match.params.id}`, {
    signal: ac ? ac.signal : null
  })
  .then(resp => resp.json())
  .then(resp => {
      setPercentage(100)
      if (!resp.err) {
        store.dispatch(setMovieDetail(resp))
      }
  })
  .catch(err => console.error(err))
  .finally(resolve)
})

export default () => {
  const item = useSelector(({ detail }) => detail)

  if (!item.id) {
    return <H1 marginVertical="$length.5">Movie not found!</H1>
  }

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
