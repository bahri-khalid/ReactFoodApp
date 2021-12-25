import { useEffect,useState } from 'react';
const Recipes = () => {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [myFav, setMyFav] = useState (localStorage.getItem("myFavs") ? JSON.parse(localStorage.getItem("myFavs")): []);

    // const getArray=JSON.parse(localStorage.getItem("myFavs") || '0');
    // useEffect(()=>{
    //   if(getArray!==0){
    //     setMyFav([...getArray]);
    //   }
    // },[])
    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res)=>res.json())
      .then((resJson)=>{
        setData(resJson.meals);
        setLoading(true);
      })
    },[])
    // function like(id,meal){
    //   document.getElementById(id).style.fill="red";
    //   console.log("click")
    // }
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
  useEffect(()=>{
    localStorage.setItem("myFavs", JSON.stringify(myFav));
}, [myFav])
console.log(myFav);
    return (  
      <>
      <div className="food">
        <h1 className="title">Explore Our Food</h1>
     <ul className="cards">
       {!loading ? <p>loading...</p>:
       data.map((meal)=>{
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
                {/* <svg onClick={()=>like(meal.idMeal,meal)} xmlns="http://www.w3.org/2000/svg" style={{alignSelf:"center"}} width="44" height="44" viewBox="0 0 24 24">
                  <path id={meal.idMeal} fill="#D7BDCA" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                </svg> */}
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
 
export default Recipes;