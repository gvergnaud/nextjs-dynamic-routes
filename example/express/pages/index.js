import React from 'react'
import { Link } from '../routes'

export default () => (
  <div>
    <h1>Character</h1>
    <ul>
      <li><Link prefetch route="character" id="1"><a>Luke Skywalker</a></Link></li>
      <li><Link prefetch route="character" id="2"><a>C-3PO</a></Link></li>
    </ul>

    <h1>Films</h1>
    <ul>
      <li><Link prefetch route="film" id="1"><a>A New Hope</a></Link></li>
      <li><Link prefetch route="film" id="2"><a>The Empire Strikes Back</a></Link></li>
    </ul>

    <h1>Character and Film</h1>
    <ul>
      <li>
        <Link prefetch route="character-and-film" characterId="1" filmId="2">
          <a>The Empire Strikes Back and Luke Skywalker</a>
        </Link>
      </li>
    </ul>
  </div>
)
