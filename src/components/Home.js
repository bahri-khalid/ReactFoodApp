import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Meal from "./Meal";
const Home = ({menu}) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
  const filterMeals = (meals, query) => {
    if (!query) {
        return meals;
    }

    return meals.meals.filter((meal) => {
        const mealName = meal.strMeal.toLowerCase();
        return mealName.includes(query.toLowerCase());
    });
  };

    let test = filterMeals(menu,query)
    console.log(test.meals)
    return (
        <div className="home">
            <div className="main">
                <h1>Good food choices are <br/>good investments.</h1>
                <p>There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.  </p>
                <div className="Search">
                <SearchBar data={test.meals}/>
               
                </div>
                <div className="btn">
                    <button className="btnMenu">Menu</button>
                    <span>Watch our menu</span>
                </div>
            </div>
            
        </div>
      );
}
 
export default Home;
