import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import ReactStars from 'react-rating-stars-component'
import * as reviewActions from "../../../store/reviews"

const EditReviewForm = ({ setShowModal, review }) => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setTitle(review.title)
        setContent(review.title)
        setRating(Number(review.rating))

    },[])

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
        <form onSubmit={handleSubmit}>
        <input
            placeholder={review?.title}
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
        ></input>
        <input
            placeholder={review?.content}
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
        ></input>
        <ReactStars
            count={5}
            value={Number(review.rating)}
            onChange={newValue => setRating(Number(newValue))}
            onClick={newValue => setRating(Number(newValue))}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#E55A32"
        />
        <button>edit review</button>
    </form>
    )
}

export default EditReviewForm
