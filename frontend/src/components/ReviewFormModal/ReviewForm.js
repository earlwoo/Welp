import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as reviewActions from '../../store/reviews'
import ReactStars from 'react-rating-stars-component'
import './ReviewForm.css'

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
        <form onSubmit={handleSubmit}>
            <input
                placeholder="add a title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            ></input>
            <input
                placeholder="write your review"
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
            ></input>
            <ReactStars
                count={5}
                value={rating}
                onChange={newValue => setRating(Number(newValue))}
                onClick={newValue => setRating(Number(newValue))}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#E55A32"
            />
            <button>add review</button>
        </form>
    )


}

export default ReviewForm
