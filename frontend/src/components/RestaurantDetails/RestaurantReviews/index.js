import ReviewSlot from "./ReviewSlot"
import ReviewFormModal from "../../ReviewFormModal"
import Footer from "../../Footer"

const RestaurantReviews = ( { restaurant, reviews } ) => {


    return (
        <span>
            {reviews.map((review, idx) => (
                <ReviewSlot key={idx} review={review}>{review.content}</ReviewSlot>
            ))}
            <ReviewFormModal restId={restaurant?.id}/>
        </span>
    )
}

export default RestaurantReviews
