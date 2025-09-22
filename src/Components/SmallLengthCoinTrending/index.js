import './index.css'

const SmallLengthCoinTrending = (props) => {
    const {smalldata} = props
    

    return(
        <div className='smalllengthouter'>
            <div className='imagesection'>
                <img src={smalldata.item.thumb} className='smalllengthimage'/>
                <p className='smallcoinname'>{smalldata.item.name}</p>
            </div>
            <div className='statssection0'>
                <p>{smalldata.item.data.price.toFixed(4)}</p>
                <p>{smalldata.item.market_cap_rank}</p>
            </div>
        </div>
    )
}

export default SmallLengthCoinTrending