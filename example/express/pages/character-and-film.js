import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from '../routes'

export default class CharacterAndFilmPage extends Component {
  static async getInitialProps({ query }) {
    return {
      character: await fetch(`//swapi.co/api/people/${query.characterId}`).then(x => x.json()),
      film: await fetch(`//swapi.co/api/films/${query.filmId}`).then(x => x.json()),
    }
  }

  render() {
    const { film: { title }, character: { name } } = this.props
    return (
      <div>
        <Link route="index"><a>Back to home</a></Link>
        <h1>Character and film</h1>
        <p>Film: {title}</p>
        <h2>Characters : {name}</h2>
      </div>
    )
  }
}
