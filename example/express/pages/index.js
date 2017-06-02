import React from 'react'
import { Link } from '../routes'

export default () => (
  <div>
    <h1>Character</h1>
    <ul>
      <li><Link route="character" prefetch id="1"><a>Luke Skywalker</a></Link></li>
      <li><Link route="character" prefetch id="2"><a>C-3PO</a></Link></li>
    </ul>

    <h1>Films</h1>
    <ul>
      <li><Link route="film" prefetch id="1"><a>A New Hope</a></Link></li>
      <li><Link route="film" prefetch id="2"><a>The Empire Strikes Back</a></Link></li>
    </ul>

    <h1>Character and Film</h1>
    <ul>
      <li>
        <Link route="character-and-film" prefetch characterId="1" filmId="2">
          <a>The Empire Strikes Back and Luke Skywalker</a>
        </Link>
      </li>
    </ul>
  </div>
)
