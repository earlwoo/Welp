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
           <div className='header__categories'>
               {restaurant?.categories.map(category => (
                   <div key={category} className="header__listitems">{category}</div>
                   ))}
                {restaurant && <div className="header__listitems">{restaurant?.price}</div>}
           </div>

        </div>

    )


}

export default RestaurantHeader
