import React from 'react'
import Vid from './video/Vid'
import Location from './location/Location'
import Artists from './artists/Artists'
import Events from './artists/envents/Events'
import Counter from './counter/Counter'

function Home() {
  return (
    <div>
      <Vid/>
      <Artists/>
      <Events/>
      <Counter/>
      <Location/>
    </div>
  )
}

export default Home