import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as reviewActions from '../../store/reviews'
import ReactStars from 'react-rating-stars-component'
import './ReviewForm.css'
import welp from "../Navigation/welpNav.png"

function ReviewForm({ restId, setShowModal }) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
            title,
            content,
            rating,
            userId: user.id,
            restId
        }

        dispatch(reviewActions.addReview(newData))

        setContent("")
        setRating(0)
        setTitle("")

        setShowModal(false)
    }

    return (
        <div className="add-review__form-container">

            <form className="add-review__form" onSubmit={handleSubmit}>
                <input
                    placeholder="add a title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="add-review__title"
                ></input>
                <textarea
                    rows="10" cols="40"
                    placeholder="write your review"
                    type="textarea"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>
                <div className="stars--container">
                    Your Rating:
                    <ReactStars
                        count={5}
                        value={rating}
                        onChange={newValue => setRating(Number(newValue))}
                        onClick={newValue => setRating(Number(newValue))}
                        size={40}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#DD7134"
                        color="lightgrey"
                    />
                </div>
                <button className="submit-review__btn">add review</button>
            </form>
            <div
            className="addReview_logo-container">
                <div className="thank-you">Thank you for using</div>
                <img className="addReview_logo" src={welp} ></img>
            </div>
        </div>

    )


}

export default ReviewForm
