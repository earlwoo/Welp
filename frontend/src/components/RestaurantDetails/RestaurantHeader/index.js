import { useSelector } from "react-redux"
import { useParams } from "react-router"
import RatingStars from "../../RatingStars"
import "./index.css"

const RestaurantHeader = () => {
    const { restId } = useParams()
    const restaurants = useSelector(state => state.restaurants)
    // const reviews = useSelector(state => state.reviews)

    let restaurant = restaurants[restId]


    return (
        <div className='restDetail__Header' style={{
            backgroundImage: `url(${restaurant?.imageUrl})`
        }}>
            <div className='header__name'>{restaurant?.name}</div>
            <div className='header__star' >
                {restaurant && <RatingStars rating={restaurant && restaurant.rating}/>}
            </div>
           <ul className='header__categories'>
               {restaurant?.categories.map(category => (
                    <li key={category} className="header__listitems">{category}</li>
               ))}
               {restaurant && <li className="header__listitems">{restaurant?.price}</li>}
           </ul>

        </div>

    )


}

export default RestaurantHeader
