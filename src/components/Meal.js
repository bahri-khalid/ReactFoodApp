import { click } from '@testing-library/user-event/dist/click';
import {FaHeart} from 'react-icons/fa'
const Meal = ({list}) => {
    const click=(mealTitle)=>{
        localStorage.setItem(mealTitle,mealTitle)
        const data = localStorage.getItem("53028");
        console.log(data);  
        
    }
    return ( 
        <div >
            <div className="mealIMG" >
                <img src={list.strMealThumb}  alt={null} />
            </div>
            <div className="discription">
                <span className='mealName'> {list.strMeal}</span>
                <div><span className='youtubeChanell'>Watch it in youtube </span> <button onClick={()=>{click(list.strMeal)}}><FaHeart className='heart' /></button> </div>
                
            </div>
        </div>
     );
}
export default Meal;