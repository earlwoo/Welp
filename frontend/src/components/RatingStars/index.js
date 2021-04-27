import ReactStars from "react-rating-stars-component"


const RatingStars = ({ rating }) => {
    return (
        <>
            <ReactStars
                count={5}
                edit={false}
                size={40}
                value={Number(rating)}
                activeColor="#E55A32"
            />
        </>

    )
}

export default RatingStars
