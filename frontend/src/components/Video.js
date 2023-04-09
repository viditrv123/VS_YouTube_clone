import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Video.css'

function Video({videoImage, title, views, timestamp,channelImage, channelName}) {
  return (
    <div className='videoCard'>
        <img className='video__thumbnail' src={videoImage} alt="videos"/>
        <div className='videoCard__info'>
            <AccountCircleIcon className='videoCard__avatar' alt={channelName} src={channelImage}/>
            <div className='video__text'>
              <h4>{title}</h4>
              <p>{channelName}</p>
              <p>
                  {views} . {timestamp}
              </p>
            </div>
        </div>
    </div>
  )
}

export default Video