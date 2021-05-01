import { useSelector } from "react-redux"
import RatingStars from "../../RatingStars"

import "./ReviewSlot.css"
import ReviewSlotHeader from "./ReviewSlotHeader";

const ReviewSlot = ({ review }) => {

    const users = useSelector(state => state.users)

    const { title, userId, content, rating, updatedAt } = review

    let reviewDate = updatedAt.split('T')[0].split('-')
    const [year, month, day] = reviewDate

    const reviewUser = users[userId]

    return (
        <div className="review__container">
            <ReviewSlotHeader  review={review} reviewUser={reviewUser}/>
            <div className="review__star-rating">
                <RatingStars rating={rating} />
                <div className="review__date">
                    {month}-{day}-{year}
                </div>
            </div>
            <div className="review__title">
                "{title}"
            </div>
            <div className="review__content">
                {content}
            </div>

        </div>

    )

}

export default ReviewSlot
