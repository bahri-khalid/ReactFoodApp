import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Meal from "./Meal";
import Menu from "./Menu";
const Home = ({menu}) => {
  const [input,setInput] = useState("")
  const [toDisplay,setToDisplay] = useState([])

  const handleChange =(typed)=>{
      let matched =[];
      if(typed){
          matched = menu.meals.filter((dt)=>{
              return dt.strMeal.match(new RegExp(`${typed}`,'gi')) || dt.strCategory.match(new RegExp(`${typed}`,'gi')) ||dt.strArea.match(new RegExp(`${typed}`,'gi'))
          })
      }
      setInput(typed);
      setToDisplay(matched)
  }
    return (
        <div className="home">
            <div className="main">
                <h1>Good food choices are <br/>good investments.</h1>
                <p>There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.  </p>
                <div className="Search">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            value={input}
            onChange={(e)=>{handleChange(e.target.value)}}
        />
        <button  type="submit"><FaSearch/></button>
        </div>
                </div>
                <div className="btn">
                    <button className="btnMenu">Menu</button>
                    <span>Watch our menu</span>
                </div>
                <Menu meals={toDisplay}/>
            </div>
      );
}

export default Home;
