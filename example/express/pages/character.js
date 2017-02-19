import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { IndexLink, FilmLink } from '../routes'

const idFromUrl = url => url.match(/films\/([0-9]*)/)[1]

export default class CharacterPage extends Component {
  static async getInitialProps({ query }) {
    return fetch(`http://swapi.co/api/people/${query.id}`).then(x => x.json())
  }

  render() {
    const { name = '', films = [] } = this.props

    return (
      <div>
        <IndexLink><a>Back to home</a></IndexLink>
        <h1>Charactername : {name}</h1>
        <h2>Films : </h2>
        <ul>
          {films
            .map(idFromUrl)
            .map((id, i) =>
              <li key={i}><FilmLink prefetch id={id}><a>{id}</a></FilmLink></li>
            )}
        </ul>
      </div>
    )
  }
}
