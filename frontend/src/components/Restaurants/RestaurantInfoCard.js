import {NavLink} from 'react-router-dom'
import RatingStars from '../RatingStars'

const RestaurantInfoCard = ({restaurant}) => {

    return (
        <div className="homepage__restinfo">
            <div className="restInfo__img">
                <img className="image "src={restaurant?.imageUrl} />
            </div>
            <div className="restInfo__name">
                <NavLink className="restInfo__name--font"to={`/${restaurant.id}`}>{restaurant.name}</NavLink>
            </div>
            <div className="restInfo__stars--container">
                <RatingStars rating={restaurant?.rating} />
                <div className="stars__font">
                    {restaurant?.rating} Stars
                </div>
            </div>
            <div className="restInfo__categories--container">
                {restaurant?.categories.map(category => (
                    <div key={restaurant.id}>{category}</div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantInfoCard
