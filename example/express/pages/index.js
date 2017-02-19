import React from 'react'
import { CharacterAndFilmLink, CharacterLink, FilmLink } from '../routes'

export default () => (
  <div>
    <h1>Character</h1>
    <ul>
      <li><CharacterLink prefetch id="1"><a>Luke Skywalker</a></CharacterLink></li>
      <li><CharacterLink prefetch id="2"><a>C-3PO</a></CharacterLink></li>
    </ul>

    <h1>Films</h1>
    <ul>
      <li><FilmLink prefetch id="1"><a>A New Hope</a></FilmLink></li>
      <li><FilmLink prefetch id="2"><a>The Empire Strikes Back</a></FilmLink></li>
    </ul>

    <h1>Character and Film</h1>
    <ul>
      <li>
        <CharacterAndFilmLink prefetch characterId="1" filmId="2">
          <a>The Empire Strikes Back and Luke Skywalker</a>
        </CharacterAndFilmLink>
      </li>
    </ul>
  </div>
)
