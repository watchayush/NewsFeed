import React from 'react'
import "./HorizontalFeed.css";
export default function HorizontalFeed({feed}) {
    return (
        <>
            <div className="feed">
                <div className="feed_img">
                    <div className="feed_image"></div>
                </div>
                <div className="feed_content">
                    <div className="feed_title">{feed.title}</div>
                    <div className="feed_date">{feed.published}</div>
                </div>
            </div>
        </>
    )
}
