import {NavLink } from "react-router-dom"
import {FaHeart} from 'react-icons/fa'
import logo from './logo101.png'
const Navbar = () => {

    return ( 
        <div className="navbar">
            <div className="logo"><img src={logo}  width={"80px"}  height={"80px"}/></div>
            <div className="pages">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/popular">Popular</a>
                <a href="/favorite" style={{color:"crimson",fontSize:"large"}}><FaHeart /></a>
            </div>

        </div>
     );
}
 
export default Navbar;