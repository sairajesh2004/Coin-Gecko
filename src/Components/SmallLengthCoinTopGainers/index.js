import './index.css'

const SmallLengthCoinTopGainers = (props) => {
    const {smalldata} = props
    

    return(
        <div className='smalllengthouter'>
            <div className='imagesection'>
                <img src={smalldata.image} className='smalllengthimage'/>
                <p className='smallcoinname'>{smalldata.name}</p>
            </div>
            <div className='statssection0'>
                <p>{smalldata.current_price.toFixed(2)}</p>
                <p>{smalldata.high_24h}</p>
            </div>
        </div>
    )
}

export default SmallLengthCoinTopGainers