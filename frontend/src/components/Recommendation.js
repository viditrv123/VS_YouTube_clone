import React from 'react'
import Video from './Video'
import '../styles/Recommendation.css'

function Recommendation() {
  return (
    <div className='recommendation'>
      <h2>Recommended</h2>
      <div className='recommendation__videos'>
        <Video title={"hello"}/>
        <Video title={"hi"}/>
        <Video title={"bye"}/>
        <Video title={"tata"}/>
      </div>
    </div>
  )
}

export default Recommendation