import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './RecomendedVideos.css'

function RecomendedVideos() {
    return (
        <div className="recomended-videos">
            <h2>Recomended</h2>
            <div className="recomended-videos-video">
                <VideoCard 
                    title="Become a web developer in 30 minutes"
                    views="2.3M Views"
                    timestamp="3 days out"
                    channelImage="/images/logo1.jpg"
                    channel="Khushi Shukla"
                    image="/images/recommendedVid1.jpg"
                    />
                 <VideoCard 
                    title="Learn to earn"
                    views="1.5M Views"
                    timestamp="1 week out"
                    channelImage="/images/logo2.jpg"
                    channel="Matt Damon"
                    image="/images/recommendedVid2.jpg"
                    />
                <VideoCard 
                    title="Taylor Swift's Blank Space"
                    views="10M Views"
                    timestamp="5 weeks out"
                    channelImage="/images/logo3.jpg"
                    channel="Cover Songs"
                    image="/images/recommendedVid3.jpg"
                    />
               <VideoCard 
                    title="Sherlock Holmes being Sherlock Holmes"
                    views="20M Views"
                    timestamp="1 day out"
                    channelImage="/images/logo4.jpg"
                    channel="Sherlock"
                    image="/images/recommendedVid4.jpg"
                    />
                 <VideoCard 
                    title="Learn Python in 3 hours"
                    views="1M Views"
                    timestamp="4 days out"
                    channelImage="/images/logo1.jpg"
                    channel="Khushi Shukla"
                    image="/images/recommendedVid5.jpg"
                    />
                <VideoCard 
                    title="Developer's Life"
                    views="2.3M Views"
                    timestamp="3 days out"
                    channelImage="/images/logo6.jpg"
                    channel="Henry Cavil"
                    image="/images/recommendedVid6.jpg"
                    />
                <VideoCard 
                    title="Finally Gold for India! Neeraj Chopra did it"
                    views="32M Views"
                    timestamp="1 day out"
                    channelImage="/images/logo7.jpg"
                    channel="Olympics India"
                    image="/images/recommendedVid7.jpg"
                    />
                <VideoCard 
                    title="Jake Peralta being a baby"
                    views="2M Views"
                    timestamp="4 hours out"
                    channelImage="/images/logo8.jpg"
                    channel="Brooklyn99"
                    image="/images/recommendedVid8.jpg"
                    />
                <VideoCard 
                    title="Learn to earn"
                    views="1.5M Views"
                    timestamp="1 week out"
                    channelImage="/images/logo2.jpg"
                    channel="Matt Damon"
                    image="/images/recommendedVid2.jpg"
                    />
                <VideoCard 
                    title="Taylor Swift's Blank Space"
                    views="10M Views"
                    timestamp="5 weeks out"
                    channelImage="/images/logo3.jpg"
                    channel="Cover Songs"
                    image="/images/recommendedVid3.jpg"
                    />
               <VideoCard 
                    title="Sherlock Holmes being Sherlock Holmes"
                    views="20M Views"
                    timestamp="1 day out"
                    channelImage="/images/logo4.jpg"
                    channel="Sherlock"
                    image="/images/recommendedVid4.jpg"
                    />
              <VideoCard 
                    title="Learn Python in 3 hours"
                    views="1M Views"
                    timestamp="4 days out"
                    channelImage="/images/logo1.jpg"
                    channel="Khushi Shukla"
                    image="/images/recommendedVid5.jpg"
                    />
            </div>

        </div>
    )
}

export default RecomendedVideos
