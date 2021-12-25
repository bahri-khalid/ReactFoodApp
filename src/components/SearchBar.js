import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Meal from "./Meal";
import Menu from "./Menu";
const SearchBar = ({data}) => {
    const [input,setInput] = useState("")
    const [toDisplay,setToDisplay] = useState([])

    const handleChange =(typed)=>{
        let matched =[];
        if(typed){
            matched = data.filter((dt)=>{
                return dt.strMeal.match(new RegExp(`${typed}`,'gi'))
            })
        }
        setInput(typed);
        setToDisplay(matched)
    }


    return(
        <div className="search">
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
        <Menu meals={toDisplay}/>
        </div>
    )


    };

export default SearchBar;