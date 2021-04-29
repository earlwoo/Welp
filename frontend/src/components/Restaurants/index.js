import RestaurantInfoCard from './RestaurantInfoCard'
import "./Restaurants.css"
import food from "./photos/food.png"
import food1 from "./photos/food1.png"
import food2 from "./photos/food2.png"
import food3 from "./photos/food3.png"
import food4 from "./photos/food4.png"
import Footer from '../Footer'

export default function Restaurants({ restaurants, searchTerm }) {

    let restArr = [];
    for (let key in restaurants) {
        restArr.push(restaurants[key])
    };

    const foodPhotos = [food, food1, food2, food3, food4]
    const random = Math.floor(Math.random () * 5)
    const randomImg = foodPhotos[random]


    let searchSet = new Set()

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
            <div className="home__photo--container">
                <img className="home__photo--img" src={randomImg}>
                </img>

            </div>
            <h1 className="home__text">The Best Restaurants in Your Area</h1>
            <div className="restInfo__container">
                {mainDisplay.map(restaurant => {
                    return <RestaurantInfoCard key={restaurant.id} restaurant={restaurant}/>
                })}
            </div>
        </div>
    )
}
