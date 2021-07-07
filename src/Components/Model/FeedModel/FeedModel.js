import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import GetnewsFeeds from "../../../Services/GetnewsFeeds.js";
import "./FeedModel.css";

export default function FeedModel({feedLink}) {
    const [modelContent, setModelContent] = useState();
    useEffect(()=>{
        GetnewsFeeds(feedLink).then((res)=>{
            setModelContent(res.data)
            console.log("inside feedModel after vertical feed clicked");
        })
    },[])

    
      return (
          <div id="modelContent" dangerouslySetInnerHTML={{__html:modelContent}} style={{margin:"20px"}}></div>
      )
}
