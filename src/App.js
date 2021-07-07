import './App.css';
import {useState} from "react";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import HorizontalNewsLayout from "./Components/News/HorizontalNewsLayout/HorizontalNewsLayout.js";
import VerticalNewsLayout from './Components/News/VerticalNewsLayout/VerticalNewsLayout';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
function App() {
  
  const [layoutIsHorizontal, setlayoutIsHorizontal] = useState(true);

  const changeLayout = () =>{
    setlayoutIsHorizontal(pre=>!pre);
  } 

  return (
    <div className="App">
      <div className="sidebar"><Sidebar changeLayout={changeLayout}/></div>
      <div className="news">
        {
          layoutIsHorizontal === true ? <HorizontalNewsLayout /> :  <VerticalNewsLayout className="fadeIn"/>
        }
      </div>
    </div>
  );
}

export default App;
