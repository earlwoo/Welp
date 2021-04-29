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
                    <div>
                        <i className="fas fa-walking"></i>
                        Take Out
                    </div>
                }
                </div>
                <div className="transactions__text">{
                    transactions.includes('delivery') &&
                    <div>
                        <i className="fas fa-truck"></i>
                        Delivery
                    </div>
                }
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
                <i className="fas fa-phone-volume"></i>
                {phoneNum}
            </div>
            <p className="address_text">Address:</p>
            <div className="address">
                <div>{restaurant.location.address1},</div>
                <div>{restaurant?.location.address2}</div>
                <div>{restaurant.location.city} {restaurant.location.state}, {restaurant.location.zip_code}</div>

            </div>
        </div>
    )
}

export default RestaurantInfo
