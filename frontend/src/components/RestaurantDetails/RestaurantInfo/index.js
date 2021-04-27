import "./index.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"



const RestaurantInfo = ({ restaurant }) => {
    if (!restaurant) return null
    const { url, transactions, phoneNum } = restaurant

    let transactionsInfo = () => {
        return (
            <>
                <div>{
                    transactions.includes('pickup') &&
                    <i className="fas fa-walking">Take Out</i>
                }
                </div>
                <div>{
                    transactions.includes('delivery') &&
                    <i className="fas fa-truck">Delivery</i>
                }
                </div>
            </>
        )
    }


    return (
        <div className='restaurant__info--container'>
            <a href={url}>website</a>
            <div>
                {transactionsInfo()}
            </div>
            <div>
                {phoneNum}
            </div>
        </div>
    )
}

export default RestaurantInfo
