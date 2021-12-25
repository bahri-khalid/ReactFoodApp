import Meal from "./Meal"
const Menu = ({meals}) => {
    
    return (
        <div>
            <h1>Explore our menu</h1>
                    <div className="menu">
                    {meals.map((element)=>(
                        <div className="meal" key={element.idMeal}>
                            <Meal list={element} />
                        </div>
                    ))}
                    </div>
        </div>

     );
}
 
export default Menu;

