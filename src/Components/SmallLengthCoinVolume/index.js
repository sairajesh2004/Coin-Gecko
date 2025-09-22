import './index.css'

const SmallLengthCoinVolume = (props) => {
    const {smalldata} = props
    

    return(
        <div className='smalllengthouter'>
            <div className='imagesection'>
                <img src={smalldata.image} className='smalllengthimage'/>
                <p className='smallcoinname'>{smalldata.name}</p>
            </div>
            <div className='statssection'>
                <p>$ {smalldata.total_volume}</p>
            </div>
        </div>
    )
}

export default SmallLengthCoinVolume