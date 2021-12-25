import { useEffect,useState } from 'react';
const  Fav= () => {
    const [myFav, setMyFav] = useState (localStorage.getItem("myFavs") ? JSON.parse(localStorage.getItem("myFavs")): []);
    console.log("voila"+myFav);
    const addfav = (item)=>{
  
        let addArray=true;
        myFav.map((itemfav,index)=>{
          if(item.idMeal===itemfav.idMeal){
            myFav.splice(index,1);
            addArray=false;
          }
        });
        if(addArray){
          myFav.push(item);
        }
        setMyFav([...myFav]);
      }
    return ( 
        <>  
        <div className="food">
          <h1 className="title">Your Favorit Food</h1>
       <ul className="cards">
         {
         myFav.map((meal)=>{
           return(
           <li key={meal.idMeal}>
            <a href="#" className="card">
              <img src={meal.strMealThumb} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                  <img className="card__thumb" src="img/logo.png" alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">{meal.strMeal}</h3>            
                    <span className="card__status">{meal.strArea}</span>
                  </div>
                </div>
                <div className="card__description">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                  {
                myFav.includes(meal) ?(
                  <svg onClick={()=>addfav(meal)} xmlns="http://www.w3.org/2000/svg" style={{alignSelf:"center"}} width="44" height="44" viewBox="0 0 24 24">
                  <path id={meal.idMeal} fill="red" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                  </svg>
                ):(
                  <svg onClick={()=>addfav(meal)} xmlns="http://www.w3.org/2000/svg" style={{alignSelf:"center"}} width="44" height="44" viewBox="0 0 24 24">
                  <path id={meal.idMeal} fill="gray" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                  </svg>
                )                 
         }
                </div>
              </div>
            </a>      
          </li>)      
         })
         } 
         
    </ul>
        </div>
        </>
       );
}
 
export default Fav;