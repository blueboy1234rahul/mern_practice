import React from 'react'
import Counter from './Counter'

const Home = ({name,job}) => {
  return (
    <div>
      <h1>hi i'm {name}</h1>
      <p>Im a {job}</p>
      <Counter/>
    </div>
  )
}

export default Home
