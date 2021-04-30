import { useEffect } from 'react'
import food from "./photos/food.png"
import food1 from "./photos/food1.png"
import food2 from "./photos/food2.png"
import food3 from "./photos/food3.png"
import food4 from "./photos/food4.png"
import "./index.css"

const ResaurantsPhoto = () => {


    const foodPhotos = [food, food1, food2, food3, food4]
    const random = Math.floor(Math.random () * 5)
    let randomImg = foodPhotos[random]

    // let randomimg;
    // useEffect(() => {
    //     const random = Math.floor(Math.random () * 5)
    //     randomimg = foodPhotos[random]
    //     console.log("inside useeffect", randomImg)


    // }, [])


    return (
        <div className="home__photo--container">
            <img className="home__photo--img" src={randomImg ? randomImg : null}>
            </img>
        </div>
    )
}

export default ResaurantsPhoto
