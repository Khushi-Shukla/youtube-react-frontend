import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div>
            <Avatar src={image} alt={channel} />
            {description}
        </div>
    )
}

export default ChannelRow
