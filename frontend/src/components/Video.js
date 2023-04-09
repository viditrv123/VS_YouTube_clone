import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Video({videoImage, title, views, timestamp,channelImage, channelName}) {
  return (
    <div className='videoCard'>
        <img src={videoImage} alt="videos"/>
        <div className='videoCard__info'>
            <AccountCircleIcon className='videoCard__avatar' alt={channelName} src={channelImage}/>
        </div>
        <div className='video__text'>
            <h4>{title}</h4>
            <p>{channelName}</p>
            <p>
                {views} . {timestamp}
            </p>
        </div>
        
    </div>
  )
}

export default Video