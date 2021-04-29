import "./index.css"
// import { useSelector } from "react-redux"
// import { useEffect } from "react"



const RestaurantInfo = ({ restaurant }) => {
    if (!restaurant) return null
    const { url, transactions, phoneNum } = restaurant

    let transactionsInfo = () => {
        return (
            <>
                <div className="transactions__text">{
                    transactions.includes('pickup') &&
                    <i className="fas fa-walking"></i>
                }Take Out
                </div>
                <div className="transactions__text">{
                    transactions.includes('delivery') &&
                    <i className="fas fa-truck"></i>
                }Delivery
                </div>
            </>
        )
    }


    return (
        <div className='restDetail__info'>
            <div className="info_text">Restaurant Does</div>
            <div className="restDetail__transactions">
                {transactionsInfo()}
            </div>
            <div className="phone__div">
                <i class="fas fa-phone-volume"></i>
                {phoneNum}
            </div>
        </div>
    )
}

export default RestaurantInfo
