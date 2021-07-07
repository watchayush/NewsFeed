import React,{useState} from 'react'
import "./Sidebar.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import Feedback from "../Model/FeedModel/FeedbackModel/Feedback.js";
// import black from "@material-ui/core/colors/black";
Modal.setAppElement('#root');
export default function Sidebar({changeLayout}) {
    
    const [layoutIsHorizontal, setlayoutIsHorizontal] = useState(true);
    const [giveFeedback, setGiveFeedback] = useState(false);

    function iconStyles() {
        return {
          selected: {
            color: 'black',
          },
          notSelected: {
            color: 'grey',
          },
        }
      }
      var classes = makeStyles(iconStyles)();

      function toggleLayout(){
        changeLayout();
            console.log("one ",layoutIsHorizontal);

            const verticaltoggle = document.getElementById("verticaltoggle");
            const horizontaltoggle = document.getElementById("horizontaltoggle");

            const vertical = document.getElementsByClassName("vertical");
            const horizontal = document.getElementsByClassName("horizontal");

            const toggle=document.getElementsByClassName("toggleBtn");
            toggle[0].style.boxShadow="0 0 0.5em rgb(192, 192, 192) inset";

            vertical[0].style.boxShadow="0 0 0.5em rgb(192, 192, 192) inset";
            horizontal[0].style.boxShadow="0 0 0.5em rgb(192, 192, 192) inset";
            
        if(layoutIsHorizontal===true){
            setlayoutIsHorizontal(false);
            
            verticaltoggle.style.fill="grey";
            horizontaltoggle.style.fill="black";

            vertical[0].style.backgroundColor="whitesmoke";
            horizontal[0].style.backgroundColor="#0ff7";

        }
        else {
            setlayoutIsHorizontal(true);
            
            verticaltoggle.style.fill="black";
            horizontaltoggle.style.fill="grey";

            vertical[0].style.backgroundColor="#0ff7";
            horizontal[0].style.backgroundColor="whitesmoke";

        }
    }

    const set = () =>{
        setGiveFeedback(pre=>!pre);
    }

    return (
        <div className="sidemenu">
            <div className="user">
                <div className="userImage">
                    <div className="userImg"></div>
                    {/* <img src={"../download.jpg"} alt="User's mage"/> */}
                </div>
                <div className="userWelcome">
                    <div className="userName">Hi! Abhedya,</div>
                    <div className="welcomeLine">Here's your News!</div>
                </div>
            </div>

            <div className="toggle">
                <div style={{fontSize:"1.3rem",fontWeight:"bold"}} className="toggleHeading">View Toggle</div>
                <div className="toggleBtn" onClick={toggleLayout}>
                    <span className="vertical"><AssignmentIcon fontSize="medium" style={{color:"grey"}} id="verticaltoggle"/></span>
                    <span className="horizontal"><ListIcon fontSize="large" style={{color:"black"}} id="horizontaltoggle"/></span>
                </div>
            </div>

            <div className="feedback">
                <div style={{fontSize:"1.3rem",fontWeight:"bold"}}>Have a Feedback?</div>
                <div className="feedbackBtn" onClick={()=>set()}><div style={{fontSize:"1.1rem",fontWeight:"bold"}}>We are Listening!</div></div>

                {giveFeedback===true?(<Modal
                        isOpen={giveFeedback}
                        shouldCloseOnOverlayClick={true}
                        onRequsetClose={()=>setGiveFeedback(false)}
                        style={
                            {
                                overlay:{
                                    backdropFilter:"blur(5px)",
                                    backgroundColor:"whitesmoke"
                                },
                                content:{
                                    height:"100%",
                                    marginTop:"-3%",
                                    width:"50%",
                                    marginLeft:"22%",
                                    borderRadius:"25px",
                                    border:"none",
                                    boxShadow: "0 0 30px rgb(194, 194, 194)",
                                    backgroundColor:"whitesmoke"
                                }
                            }
                        }>
                            <Feedback style={{margin:"50px"}}/>
                        </Modal>):null}

            </div>
        </div>
    )
}
