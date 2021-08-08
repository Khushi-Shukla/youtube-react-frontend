import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow/ChannelRow';

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow 
            image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahDdSdyI3RHyDgNSHm1NlKTSZf57IiUCAYA&usqp=CAU"
            channel="Learn"
            verified="true"
            subs="50.4"
            noOfVideos="34"
            description="Check it out. We are ever growing and evolving "/>
        </div>
    )
}

export default SearchPage
