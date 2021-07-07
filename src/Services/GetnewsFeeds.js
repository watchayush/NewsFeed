import React from 'react'
import axios from "axios";
const GetnewsFeeds = async(url) => {
        // fetch data from a url endpoint
        const data = await axios.get(url);
        console.log("inside sdfg ",data);
        return data;
}
export default GetnewsFeeds;
