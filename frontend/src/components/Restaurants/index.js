import RestaurantInfoCard from './RestaurantInfoCard'

export default function Restaurants({ restaurants }) {

    let restArr = [];
    for (let key in restaurants) {
        restArr.push(restaurants[key])
    };


    return (
        <div>
            <h1>restaurants</h1>
            {restArr.map(restaurant => {
                return <RestaurantInfoCard key={restaurant.id} restaurant={restaurant}/>
            })}

        </div>
    )
}
