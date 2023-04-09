import React from 'react'
import Video from './Video'
import '../styles/Recommendation.css'

function Recommendation() {
  const dummyData=require("../DummyData/VideoData.json")
  return (
    <div className='recommendation'>
      <h2>Recommended</h2>
      <div className='recommendation__videos'>
        {dummyData.map(x=><Video title={x.title} videoImage={x.videoImage} views={x.views} timestamp={x.timestamp} channelImage={x.channelImage} channelName={x.channelName}/>)}
      </div>
    </div>
  )
}

export default Recommendation