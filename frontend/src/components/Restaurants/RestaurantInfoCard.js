import {NavLink} from 'react-router-dom'

const RestaurantInfoCard = ({restaurant}) => {

    return (
        <div className="homepage__restinfo">
            <NavLink to={`/${restaurant.id}`}>{restaurant.name}</NavLink>
        </div>
    )
}

export default RestaurantInfoCard
