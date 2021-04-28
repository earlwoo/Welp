import ReactStars from "react-rating-stars-component"


const RatingStars = ({ rating }) => {
    return (
        <>
            <ReactStars
                count={5}
                edit={false}
                size={40}
                value={Number(rating)}
                isHalf={true}
                activeColor="#DD7134"
            />
        </>

    )
}

export default RatingStars
