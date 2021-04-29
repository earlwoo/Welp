import ReviewSlot from "./ReviewSlot"
import ReviewFormModal from "../../ReviewFormModal"
import "./index.css"

const RestaurantReviews = ( { restaurant, reviews } ) => {


    return (
        <span className="reviews__container">
            <h2>Reviews</h2>
            {reviews.map((review, idx) => (
                <ReviewSlot key={idx} review={review}>{review.content}</ReviewSlot>
            ))}
            <ReviewFormModal restId={restaurant?.id}/>
        </span>
    )
}

export default RestaurantReviews
