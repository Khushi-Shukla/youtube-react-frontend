import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="video-card">
            <img className="video-card-thumbnail" src={image} alt=""/>
            <div className="videocard-info">
                <Avatar className="videocard-avatar" alt={channel} src={channelImage} />
                <div  className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}+{timestamp}
                    </p>                
                </div>
            </div>
        </div>
    )
}

export default VideoCard
