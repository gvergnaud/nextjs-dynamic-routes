import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from '../routes'

const idFromUrl = url => url.match(/people\/([0-9]*)/)[1]

export default class FilmPage extends Component {
  static async getInitialProps({ query }) {
    return fetch(`//swapi.co/api/films/${query.id}`).then(x => x.json())
  }

  render() {
    const { title, opening_crawl, characters = [] } = this.props
    return (
      <div>
        <Link route="index"><a>Back to home</a></Link>
        <h1>{title}</h1>
        <p>{opening_crawl}</p>
        <h2>Characters : </h2>
        <ul>
          {characters
            .map(idFromUrl)
            .map((id, i) =>
              <li key={i}><Link route="character" prefetch id={id}><a>{id}</a></Link></li>
            )}
        </ul>
      </div>
    )
  }
}
