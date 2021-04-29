import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import RatingStars from "../../RatingStars"
import * as reviewActions from "../../../store/reviews"
import { Modal } from '../../../context/Modal';
import EditReviewForm from './EditReviewForm'
import "./ReviewSlot"

const ReviewSlot = ({ review }) => {
    //import user to see if user can edit or delete review
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);

    const { id, title, userId, content, rating, updatedAt} = review

    let reviewDate = updatedAt.split('T')[0]

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(id))
    }

    const userReview = () => {
        return (
            <>
                <button className="" onClick={() => setShowModal(true)}>edit</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditReviewForm setShowModal={setShowModal} review={review} />
                    </Modal>
                )}
                <button onClick={e => handleDelete(e, id)}>delete</button>
            </>
        )
    }


    return (
        <div className="review__container">Review Section
            <div className="review__header">
                <RatingStars rating={rating} />
                {reviewDate}
                {user && user.id === userId ? userReview() : null}
            </div>
            <div>

            </div>
            <div>
                {title}
            </div>
            <div>
                {content}
            </div>

        </div>

    )

}

export default ReviewSlot
