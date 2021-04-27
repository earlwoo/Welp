import { useDispatch, useSelector } from "react-redux"
import RatingStars from "../../RatingStars"
import * as reviewActions from "../../../store/reviews"

const ReviewSlot = ({ review }) => {
    //import user to see if user can edit or delete review
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const { id, title, userId, restId, content, rating } = review

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(id))
    }

    const userReview = () => {

        return (
            <>
                <button>edit</button>
                <button onClick={e => handleDelete(e, id)}>delete</button>
            </>
        )

    }


    return (
        <div>Review Section
            <div>
                {title}
            </div>
            <div>
                {user && user.id === userId ? userReview() : null}
            </div>
            <div>
                {content}
            </div>
            <div>
                <RatingStars rating={rating} />
            </div>

        </div>

    )

}

export default ReviewSlot
