import React from 'react';
import {useState,useEffect} from "react";
import Paginate from '../../Paginate.js';
import HorizontalFeed from "../../Feed/HorizontalFeed/HorizontalFeed.js";
import "./HorizontalNewsLayout.css";
import GetnewsFeeds from "../../../Services/GetnewsFeeds.js";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FeedModel from '../../Model/FeedModel/FeedModel.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function HorizontalNewsLayout() {
    const [feeds,setFeeds] = useState([]);
    const no_of_feeds_per_page = 5;
    const total_no_of_pages = Math.ceil(feeds.length/no_of_feeds_per_page);
    const [currentPage, setcurrentPage] = useState(1);
    const [current_page_feeds, setcurrent_page_feeds] = useState([]);
    const [modelView, setmodelView] = useState(false);

    useEffect(()=>{
    
        GetnewsFeeds('https://api.first.org/data/v1/news').then(data=>{
            console.log(data.data.data);
            setFeeds(data.data.data)
        });
    },[])

    useEffect(() => {
        const first_feed = (currentPage-1)*no_of_feeds_per_page;
        const last_feed = first_feed + 5;
        feeds.length> 0 && setcurrent_page_feeds(feeds.slice(first_feed,last_feed));
        console.log("current page is ",currentPage);
        console.log(first_feed," ",last_feed," ",current_page_feeds);
        
    }, [currentPage, feeds]);

    const setPage = (page) => {
        setcurrentPage(page);
        console.log("inside setPage function ",currentPage);
    }

    const delete_feed = (id) =>{
        var newFeed = feeds.filter(feed=>{
            if(feed.id !== id)
                return feed;
        })
        setFeeds(newFeed);
        console.log("inside feed delete function and newFeed is ",newFeed);
    }
    const set = () =>{
        setmodelView(pre=>!pre);
        console.log(modelView);
    }
    if(feeds.length === 0){
        return null;
    }
    
    return (
       <TransitionGroup className="news_feeds">
            {current_page_feeds.map(feed =>(
                <CSSTransition key={feed.id} timeout={900} classNames="transitionH">
                <div className="feed_body" onClick={()=>set()}>

                {modelView===true?(<Modal
                        isOpen={modelView}
                        shouldCloseOnOverlayClick={true}
                        onRequsetClose={()=>setmodelView(false)}
                        style={
                            {
                                overlay:{
                                    backdropFilter:"blur(5px)",
                                    backgroundColor:"whitesmoke"
                                },
                                content:{
                                    width:"50%",
                                    marginLeft:"30%",
                                    borderRadius:"7px",
                                    border:"none",
                                    boxShadow: "0 0 30px rgb(194, 194, 194)"
                                }
                            }
                        }>
                            <FeedModel feedLink={feed.link} style={{margin:"50px"}}/>
                        </Modal>):null}

                     <div className="feed_card">
                         <HorizontalFeed feed={feed}/>
                     </div>
                     <div className="delete_btn">
                         <div className="delete" onClick={()=>{delete_feed(feed.id)}}> 
                             X 
                         </div>
                     </div>
                    
                 </div>
                
                 </CSSTransition>
            ))}
            <div className="paginate">
                <Paginate total_no_of_pages={total_no_of_pages} setPage={setPage}/>
            </div>
        </TransitionGroup>
    )
}
