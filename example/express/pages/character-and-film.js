import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { IndexLink, CharacterLink } from '../routes'

export default class CharacterAndFilmPage extends Component {
  static async getInitialProps({ query }) {
    return {
      character: await fetch(`https://swapi.co/api/people/${query.characterId}`).then(x => x.json()),
      film: await fetch(`https://swapi.co/api/films/${query.filmId}`).then(x => x.json()),
    }
  }

  render() {
    const { film: { title }, character: { name } } = this.props
    return (
      <div>
        <IndexLink><a>Back to home</a></IndexLink>
        <h1>Character and film</h1>
        <p>Film: {title}</p>
        <h2>Characters : {name}</h2>
      </div>
    )
  }
}
