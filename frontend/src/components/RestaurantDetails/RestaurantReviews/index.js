import ReviewSlot from "./ReviewSlot"
import ReviewFormModal from "../../ReviewFormModal"
import "./index.css"

const RestaurantReviews = ( { restaurant, reviews } ) => {


    return (
        <span className="reviews__container">
            <div className="howisit">Welpers say</div>
            {reviews.map((review, idx) => (
                <ReviewSlot key={idx} review={review}>{review.content}</ReviewSlot>
            ))}
            <ReviewFormModal restId={restaurant?.id}/>
        </span>
    )
}

export default RestaurantReviews
