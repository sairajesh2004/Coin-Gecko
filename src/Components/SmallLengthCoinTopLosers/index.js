import './index.css'

const SmallLengthCoinTopLosers = (props) => {
    const {smalldata} = props
    

    return(
        <div className='smalllengthouter'>
            <div className='imagesection'>
                <img src={smalldata.image} className='smalllengthimage'/>
                <p className='smallcoinname'>{smalldata.name}</p>
            </div>
            <div className='statssection'>
                <p>{smalldata.current_price.toFixed(3)}</p>
                <p>{smalldata.low_24h.toFixed(3)}</p>
            </div>
        </div>

    )
}

export default SmallLengthCoinTopLosers