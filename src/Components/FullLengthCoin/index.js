import { FaRegStar } from "react-icons/fa";
import './index.css'

const FullLengthCoin = (props) => {
    const {Largedata} = props
    
    return(
        <div className='Fulllenghtouter'>
            <div className='rownumber'>
                <p>{Largedata.market_cap_rank}</p>
                <div className="imagesec">
                    <img src={Largedata.image} className="rowimg"/>
                    <p>{Largedata.name}</p>
                </div>
            </div>
            
            <div className="statssection1">
                <p>${Largedata.current_price}</p>
                <p>${Largedata.price_change_percentage_1h_in_currency.toFixed(4)}</p>
                <p>${Largedata.price_change_percentage_24h_in_currency.toFixed(4)}</p>
                <p>${Largedata.price_change_percentage_7d_in_currency
                            ? Largedata.price_change_percentage_7d_in_currency.toFixed(4)
                            : 'N/A'}</p>
                <p>${Largedata.total_volume}</p>
                <p>${Largedata.market_cap}</p>
            </div>
            
        </div>
    )
}

export default FullLengthCoin