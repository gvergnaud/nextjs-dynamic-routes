import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { IndexLink, CharacterLink } from '../routes'

const idFromUrl = url => url.match(/people\/([0-9]*)/)[1]

export default class FilmPage extends Component {
  static async getInitialProps({ query }) {
    return fetch(`http://swapi.co/api/films/${query.id}`).then(x => x.json())
  }

  render() {
    const { title, opening_crawl, characters = [] } = this.props
    return (
      <div>
        <IndexLink><a>Back to home</a></IndexLink>
        <h1>{title}</h1>
        <p>{opening_crawl}</p>
        <h2>Characters : </h2>
        <ul>
          {characters
            .map(idFromUrl)
            .map((id, i) =>
              <li key={i}><CharacterLink prefetch id={id}><a>{id}</a></CharacterLink></li>
            )}
        </ul>
      </div>
    )
  }
}
