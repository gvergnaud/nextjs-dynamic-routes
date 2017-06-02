import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from '../routes'

const idFromUrl = url => url.match(/films\/([0-9]*)/)[1]

export default class CharacterPage extends Component {
  static async getInitialProps({ query }) {
    return fetch(`//swapi.co/api/people/${query.id}`).then(x => x.json())
  }

  render() {
    const { name = '', films = [] } = this.props

    return (
      <div>
        <Link route="index"><a>Back to home</a></Link>
        <h1>Charactername : {name}</h1>
        <h2>Films : </h2>
        <ul>
          {films
            .map(idFromUrl)
            .map((id, i) =>
              <li key={i}><Link route="film" prefetch id={id}><a>{id}</a></Link></li>
            )}
        </ul>
      </div>
    )
  }
}
