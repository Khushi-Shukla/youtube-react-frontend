import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow 
                image={process.env.PUBLIC_URL +  "/images/searchLogo.png"}
                channel="The Coder"
                verified="true"
                subs="108k"
                noOfVideos={34}
                description="Check it out. We are ever growing and evolving. We are now a family of 108K members. New videos posted eveyday. Join us to know more "
                />
            
            <VideoRow
                views="3,45,323"
                image={process.env.PUBLIC_URL +  "/images/search1.jpg" }
                channel="Geek Coder"
                title="Implementing Skeleton Screens In React" 
                subs="922K" 
                timestamp="3 days ago" 
                description= "In this tutorial, you’ll learn what a skeleton screen UI is and some types of skeleton screen libraries, along with their pros and cons. "
             />

            <VideoRow
                views="71,103 "
                image={process.env.PUBLIC_URL + "/images/search2.jpg" }
                channel="Pro Developer"
                title="Understanding React's UI Rendering Process" 
                subs="452K" 
                timestamp="4 weeks ago" 
                description= "This talk by Anthony Garritano (Senior Software Engineer at CrossComm) examines how React implements a Virtual DOM to quickly render changes to the user interface. By the end of this talk the audience will know the basics of UI rendering with JavaScript through a Virtual DOM, "
             />
            
            <VideoRow
                views="76,985"
                image={process.env.PUBLIC_URL + "/images/search3.jpg" }
                channel="Smplified Learning"
                title="Junior Vs Senior Code - How To Write Better Code As A Web Developer - React" 
                subs="102K" 
                timestamp="4 months ago" 
                description= "🚨 IMPORTANT: Learn React Today Course:"
             />
             
             <VideoRow
                views="333,605"
                image={process.env.PUBLIC_URL + "/images/search4.jpg" }
                channel="Code Fire"
                title="10 React Hooks Explained // Plus Build your own from Scratch" 
                subs="773K" 
                timestamp="1 year ago" 
                description= "React hooks provide a highly-efficient was to tap into framework features and organize reactive logic. Learn how use every built-in React hook"
             />

            <VideoRow
                views="306,529"
                image={process.env.PUBLIC_URL + "/images/search5.jpg" }
                channel="Code Easy"
                title=" Code your first React app | Beginner React app | To Do List" 
                subs="200K" 
                timestamp="1 week ago" 
                description= "Do you want to master React JS & learn how to make an income with your new skills? 👉 Click here & enroll NOW "
             />
             
        </div>
    )
}

export default SearchPage
