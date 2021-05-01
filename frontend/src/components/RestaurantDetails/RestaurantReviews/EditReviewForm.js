import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import ReactStars from 'react-rating-stars-component'
import * as reviewActions from "../../../store/reviews"
import welp from "../../Navigation/welpNav.png"

const EditReviewForm = ({ setShowModal, review }) => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setTitle(review.title)
        setContent(review.content)
        setRating(Number(review.rating))

    }, [review.title, review.content, review.rating])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
            id: review.id,
            title,
            content,
            rating,
            userId: user.id,
            restId: review.restId
        }

        dispatch(reviewActions.editReview(newData))

        setContent("")
        setRating(0)
        setTitle("")

        setShowModal(false)
    }
    return (
        <div className="add-review__form-container">
            <form className="add-review__form" onSubmit={handleSubmit}>
                <input
                    placeholder={review?.title}
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="add-review__title"
                ></input>
                <textarea
                    className="textarea"
                    rows="10" cols="40"
                    placeholder={review?.content}
                    type="textarea"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>
                <div className="stars--container">
                    Your Rating:
                    <ReactStars
                        count={5}
                        value={review?.rating}
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
                <button className="submit-review__btn">edit review</button>
            </form>
            <div
            className="addReview_logo-container">
                <span className="thank-you">Thank you for using</span>
                <img className="addReview_logo" alt="welp logo" src={welp} ></img>
            </div>
        </div>
    )
}

export default EditReviewForm
