import React from 'react'
import './VideoRow.css'

function VideoRow({ views, image, channel, title, subs, timestamp, description }) {
    return (
        <div className="video-row">
            <img src={image} alt={channel} />
            <div className="video-row-text">
                <h3>
                    {title}
                </h3>
                <p className="video-row-headline">
                    {channel} . <span className="video-row-subs"> <span className="video-row-subs-num">{subs} </span>Subscribers </span>  { "  " } . {views} views . {timestamp}
                </p>
                <p className="video-row-description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
