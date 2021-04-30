import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import RatingStars from "../../RatingStars"
import * as reviewActions from "../../../store/reviews"
import { Modal } from '../../../context/Modal';
import EditReviewForm from './EditReviewForm'
import "./ReviewSlot.css"

const ReviewSlot = ({ review }) => {
    //import user to see if user can edit or delete review
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);

    const { id, title, userId, content, rating, updatedAt} = review

    let reviewDate = updatedAt.split('T')[0].split('-')
    const [year, month, day] = reviewDate

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(id))
    }

    const userReview = () => {
        return (
            <div className="review__editBtns">
                <button className="edit__btn" onClick={() => setShowModal(true)}>edit</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditReviewForm setShowModal={setShowModal} review={review} />
                    </Modal>
                )}
                <button className="del__btn" onClick={e => handleDelete(e, id)}>delete</button>
            </div>
        )
    }

    const reviewUser = users[userId]


    return (
        <div className="review__container">
            <div className="review__profile">
                <div className="review__user">
                    {reviewUser?.firstName} {reviewUser?.lastName}
                </div>
                {user?.id === userId ? userReview() : null}
            </div>
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
