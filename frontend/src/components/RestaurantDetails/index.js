import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as reviewActions from "../../store/reviews"
import RestaurantHeader from "./RestaurantHeader"
import RestaurantReviews from "./RestaurantReviews"
import RestaurantInfo from "./RestaurantInfo"


const RestaurantDetails = ({ restaurants }) => {
    const dispatch = useDispatch()
    const reviews = useSelector((state) => state.reviews)
    const { restId } = useParams()


    // fetching all reviews
    useEffect(() => {
        dispatch(reviewActions.fetchReviews())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const restaurant = restaurants[restId]
    let restReviews = []
    for (let key in reviews) {
        if (reviews[key].restId === Number(restId)) {
            restReviews.push(reviews[key])
        }
    }


    return (
        <span>
            <RestaurantHeader restaurant={restaurant} />
            <RestaurantInfo restaurant={restaurant} />
            <RestaurantReviews restaurant={restaurant} reviews={restReviews} />
        </span>
    )
}

export default RestaurantDetails
