import { csrfFetch } from './csrf';

const SET_RESTAURANTS = 'restaurants/setRestaurants'

export const setRestaurant = (restaurants) => {
    return {
        type: SET_RESTAURANTS,
        restaurants
    }
}

export const fetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants')

    if(!res.ok) throw res
    let resObj = {}
    try{
        let restaurants = await res.json()

        restaurants.forEach(restaurant => {
            resObj[restaurant.id] = restaurant
            resObj[restaurant.id].categories = JSON.parse(resObj[restaurant.id].categories).map(category => {
                return category.title
            })
            resObj[restaurant.id].transactions = Object.values(JSON.parse(resObj[restaurant.id].transactions))
            resObj[restaurant.id].location = JSON.parse(resObj[restaurant.id].location)
            resObj[restaurant.id].coordinates = JSON.parse(resObj[restaurant.id].coordinates)
            resObj[restaurant.id].photos = JSON.parse(resObj[restaurant.id].photos)
        });
        // todo have to see what you're getting back and destructure and parse
        dispatch(setRestaurant(resObj))
        return resObj

    } catch (err) {


    }
}

const restaurantsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_RESTAURANTS:
            newState = {...state, ...action.restaurants}
            return newState;
        default:
            return state
    }
}

export default restaurantsReducer
