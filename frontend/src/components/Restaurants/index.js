import RestaurantInfoCard from './RestaurantInfoCard'
import "./Restaurants.css"
import { useSelector } from 'react-redux'

export default function Restaurants({ restaurants }) {
    const searchTerm = useSelector(state => state.search)
    // const restaurants = useSelector(state => state.restaurants)

    let restArr = [];
    for (let key in restaurants) {
        restArr.push(restaurants[key])
    };

    let searchSet = new Set()
    // need new setup with new search, grabbing searchTerm from state
    if(searchTerm) {
        for (let key in restaurants) {
            if (restaurants[key].name.toLowerCase().includes(searchTerm.toLowerCase()) && !searchSet.has(key)) {
                searchSet.add(restaurants[key])
            }

            restaurants[key].categories.forEach(category => {
                if(category.toLowerCase() === searchTerm.toLowerCase() && !(searchSet.has(key))) {
                    searchSet.add(restaurants[key])
                    // searchArr.push()
                }
            })

        }
    }

    const mainDisplay = searchTerm ? [...searchSet] : restArr

    return (
        <div className="restInfo__body">
            <h1 className="home__text">The Best Restaurants in Philadelphia</h1>
            <div className="restInfo__container">
                {mainDisplay.map(restaurant => {
                    return <RestaurantInfoCard key={restaurant.id} restaurant={restaurant}/>
                })}
            </div>
        </div>
    )
}
