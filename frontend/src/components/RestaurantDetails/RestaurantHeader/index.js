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

        <div>
            <div className="restDetail__header-images-container">
            <div className="restDetail__headerText">
                <div className='header__name'>{restaurant?.name}</div>
                <div className='header__star' >
                    {restaurant && <RatingStars rating={restaurant && restaurant.rating} />}
                </div>
                <div className='header__categories'>
                    {restaurant?.categories.map(category => (
                        <div key={category} className="header__listitems">{category}</div>
                    ))}
                    {restaurant && <div className="header__listitems">{restaurant?.price}</div>}
                </div>
            </div>
                <div className='restDetail__Header'>
                    <img className="photo1" alt="restaurant photo1" src={restaurant?.photos[0]}></img>
                    <img className="photo2" alt="restaurant photo2" src={restaurant?.photos[1]}></img>
                    <img className="photo3" alt="restaurant photo3" src={restaurant?.photos[2]}></img>
                </div>
            </div>


        </div>


    )


}

export default RestaurantHeader
