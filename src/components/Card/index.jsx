import React from "react";
import './index.css'

export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.data.img} alt="thumbnail" className="thumbnail"/>
            <div className="contentDetails">
                <img src={props.data.pfp} alt= "pfp" className="pfp"/>
                <h1 className="title">{props.data.title}</h1>
            </div>
            <p className="channelName">{props.data.channel}</p>
            <div className="stats">
                <p className="views">{props.data.views} views</p>
                <p className="age">{props.data.age} ago</p>
            </div>
        </div>
    )
}