import './index.css'

const SmallLengthCoinPrice = (props) => {
    const {smalldata} = props
    

    return(
        <div className='smalllengthouter'>
            <div className='imagesection'>
                <img src={smalldata.image} className='smalllengthimage'/>
                <p className='smallcoinname'>{smalldata.name}</p>
            </div>
            <div className='statssection'>
                {
                    (parseInt(smalldata.ath_change_percentage) < 0) ? (<p className='redforpercent'>{smalldata.ath_change_percentage}</p>) : (<p  className='greenforpercent'>{smalldata.ath_change_percentage}</p>)
                }
            </div>
        </div>
    )
}

export default SmallLengthCoinPrice