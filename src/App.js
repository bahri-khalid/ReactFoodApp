import './App.css';
import {useState,useEffect} from 'react'
import {FaHeart} from 'react-icons/fa'
import logo from './components/logo101.png'
import Fav from './components/Favorite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import About from './components/About';
import Home from './components/Home';
import Popular from './components/Popular';
function App() {
  // localStorage.setItem("myFav",[]);
  // const [myFav,setFav]= useState(localStorage.getItem("myFav")?localStorage.getItem('myFav'):[]);
  const [meals,setMeals]  = useState(null)
  const [isPending,setIsPending] = useState(true)
  useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
          .then(res=>{
              return res.json();
          })
          .then(response=>{
              setIsPending(false)
              setMeals(response)
              
            })
            .catch(err=>console.log(err))
          },[])

  return (
    <div className="App">

            <Router>
        <div className="navbar" >
            <div className="logo"><img src={logo}  width={"80px"}  height={"80px"}/></div>
        <div className="pages">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/popular">Popular</Link>
              <a href="/favorite" style={{color:"crimson",fontSize:"large"}}><FaHeart /></a>
        </div>
        </div>

            
          <Switch>
            <Route exact path="/">
              {meals&&<Home menu={meals}/>}
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/menu">
              {isPending&&<h2>Loading...</h2>}
              {meals&&<Menu meals={meals.meals}/>}
            </Route>
            <Route exact path="/popular">
              {isPending&&<h2>Loading...</h2>}
              {meals&&<Popular meals={meals}/>}
            </Route>
          </Switch>   
      </Router>
                
            </div>

  );
}

export default App;
