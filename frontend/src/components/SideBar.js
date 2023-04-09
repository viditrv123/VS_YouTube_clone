import React from 'react'
import '../styles/SideBar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SideBar() {
  return (
    <div className='sidebar'>
      <SideBarRow selected Icon={HomeIcon} title='Home'/>
      <SideBarRow Icon={WhatshotIcon}  title='Trending'/>
      <SideBarRow Icon={SubscriptionsIcon}  title='Subscription'/>
      <hr/>
      <SideBarRow Icon={VideoLibraryIcon}  title='Library'/>
      <SideBarRow Icon={HistoryIcon}  title='History'/>
      <SideBarRow Icon={OndemandVideoIcon}  title='Your Videos'/>
      <SideBarRow Icon={WatchLaterIcon}  title='Watch Later'/>
      <SideBarRow Icon={ThumbUpOffAltIcon}  title='Liked Videos'/>
      <SideBarRow Icon={ExpandMoreIcon}  title='Show More'/>
    </div>

  )
}

export default SideBar