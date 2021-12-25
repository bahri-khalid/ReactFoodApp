import Meal from "./Meal"
const Popular = ({meals}) => {
    return (
        <div>
            <h1>Explore our popular</h1>
                    <div className="menu">
                    {meals.meals.map((element)=>(
                        <div className="meal" key={element.idMeal}>
                            <Meal list={element} />
                        </div>
                    ))}
                    </div>
        </div>

     );
}
 
export default Popular;

