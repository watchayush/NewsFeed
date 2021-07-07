import React from 'react'
import "./VerticalFeed.css";
export default function VerticalFeed({feed}) {
    return (
        <>
            <div className="feedTitle">{feed.title}</div>
            <div className="feedImageParent">
                <div className="feedImage"></div>
            </div>
        </>
    )
}