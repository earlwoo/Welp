import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react'
import EditReviewForm from './EditReviewForm'
import { Modal } from '../../../context/Modal'
import * as reviewActions from "../../../store/reviews"
import "./ReviewSlot.css"

const ReviewSlotHeader = ({ reviewUser, review }) => {
    const dispatch = useDispatch()
    const { userId, id } = review
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)

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

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(id))
    }


    return (
        <div className="review__profile">
                <div className="review__avatar">
                    <img className="user__avatar" alt="user avatar" src={reviewUser?.avatar}></img>
                </div>
                <div className="review__user">
                    <div className="review-profile__name">
                        {reviewUser?.firstName} {reviewUser?.lastName} said...
                    </div>
                    <div>
                        {reviewUser?.city}, {reviewUser?.state}
                    </div>

                </div>
                {user?.id === userId ? userReview() : null}
            </div>
    )
}

export default ReviewSlotHeader
