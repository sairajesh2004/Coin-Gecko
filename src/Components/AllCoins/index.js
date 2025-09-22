import { Component } from "react"
import {useNavigate} from 'react-router-dom'
import { IoFlame } from "react-icons/io5"
import Header from '../Header'
import { IoIosRocket } from "react-icons/io"
import SmallLengthCoinTrending from "../SmallLengthCoinTrending"
import SmallLengthCoinTopGainers from "../SmallLengthCoinTopGainers"
import FullLengthCoin from "../FullLengthCoin"
import ClipLoader from "react-spinners/ClipLoader";
import './index.css'

class AllCoins extends Component{
    state = {statusnow:'PROGRESS',coindata:[],trendingdata:[],sortedtopgainers:[],activeBtn:[]}

    onsucesss= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        this.setState({coindata: thedata,statusnow:'SUCCESS'})
    }

    onsucessstrending= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        this.setState({trendingdata: thedata.coins.slice(0,3),statusnow:'SUCCESS'})
    }

    onsucessstopgainers= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        console.log('onsucessstop')
        console.log(thedata)
        this.setState({sortedtopgainers: thedata.slice(0,3),statusnow:'SUCCESS'})
    }

    onfailure= () => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        this.setState({statusnow:'FAILURE'})
    }

    componentDidMount(){
        this.callfunctions()
    }

    callfunctions= () => {
        this.callapi()
        this.calltrendingdata()
        this.calltopgainers()
    }

    movetoall= () => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        
        if(!activeBtn.includes('highlights')){
            if(!activeBtn.includes('all')){
                this.setState(prev => ({activeBtn: [...prev.activeBtn,'all']}))
            }
            else{
                const itemarr = activeBtn.splice(activeBtn.indexOf('all'),1)
                this.setState({activeBtn: itemarr})
            }
        }
        else{
            const itemarr1 = ['all']
            this.setState({activeBtn: itemarr1})
        }
        this.props.navigate("/"); 
        
    }

    movetohighlights= () => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        if(!activeBtn.includes('all')){
            if(!activeBtn.includes('highlights')){
                this.setState(prev => ({activeBtn: [...prev.activeBtn,'highlights']}))
            }
            else{
                const itemarr = activeBtn.splice(activeBtn.indexOf('highlights'),1)
                this.setState({activeBtn: itemarr})
            }
        }
        else{
            const itemarr1 = ['highlights']
            this.setState({activeBtn: itemarr1})
        }
        this.props.navigate("/allhighlights"); 
    }

    calltrendingdata= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/search/trending'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response1 = await fetch(url,options)
        if(response1.ok){
            const data1 = await response1.json()
            this.onsucessstrending(data1)
        }
        else{
            this.onfailure()
        }
    }

    calltopgainers= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response1 = await fetch(url,options)
        if(response1.ok){
            const data1 = await response1.json()
            this.onsucessstopgainers(data1)
        }
        else{
            this.onfailure()
        }
    }


    callapi= async() => {
        const {statusnow,coindata,activeBtn,trendingdata,sortedtopgainers} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&price_change_percentage=1h,24h,7d'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response = await fetch(url,options)
        if(response.ok){
            const data = await response.json()
            this.onsucesss(data)
        }
        else{
            this.onfailure()
        }
    }

    render(){
        const {statusnow,coindata,activeBtn,trendingdata,sortedtopgainers} = this.state

        if(statusnow==='SUCCESS'){
            return(
            <>
                <Header/>
                <div className="Mainhome">
                    <div className="upperhomedetails">
                        <h1>Cryptocurrency Prices by Market Cap</h1>
                        <p>The global cryptocurrency market cap today is $4.06 Trillion, a 2.2% change in the last 24 hours.</p>
                    </div>
                    <div className="midhome">
                        <div className="trendingconthome">
                            <div className="statscontheading">
                                <IoFlame style={{fontSize: '30px'}}/>
                                <h3>Trending</h3>
                            </div>
                            {
                            
                                trendingdata.map(each => (
                                    <SmallLengthCoinTrending smalldata={each} key={each.id}/>
                                ))
                            }
                            
                        </div>
                        <div className="trendingconthome">
                            <div className="statscontheading">
                                <IoIosRocket style={{fontSize: '30px'}}/>
                                <h3>Top Gainers</h3>
                            </div>
                            {
                                sortedtopgainers.map(each => (
                                    <SmallLengthCoinTopGainers smalldata={each} key={each.id}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="belowhome">
                        <div className="buttonscont">
                            {
                                activeBtn.includes('all') ? (<button onClick={this.movetoall} value="all" className="green">All</button>) : (<button onClick={this.movetoall} value="all" className="white">All</button>)
                            }
                            {
                                activeBtn.includes('highlights') ? (<button onClick={this.movetohighlights} value="highlights" className="green">Highlights</button>) : (<button onClick={this.movetohighlights} value="highlights" className="white">Highlights</button>)
                            }
                        </div>
                    
                    <div className="listheader">
                        <hr className="forlistheader"/>
                            <div className="headerrow">
                                <div className='rownumber'>
                                    <p>Coin</p>
                                </div>
                                <div className="statssection1">
                                    <p>Price</p>
                                    <p>1h</p>
                                    <p>24h</p>
                                    <p>7d</p>
                                    <p>24h Volume</p>
                                    <p>Market - Cap</p>
                                </div>
                            </div>
                        <hr className="forlistheader"/>
                    </div>
                    <div className="listitems">
                        {
                            coindata.map(each => {
                                return <FullLengthCoin Largedata={each} key={each.id}/>
                            })
                        }
                    </div>
                    </div>
                </div>
            </>
        )
        }
        else if (statusnow==="FAILURE"){
            return(
                <div className="Failedcentral">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/024/815/668/small_2x/oops-404-error-with-a-broken-robot-animation-flash-message-color-failed-loading-animation-for-broken-link-web-design-animation-ultra-hd-4k-free-video.jpg" className="Failedimg"/>
                    <button onClick={this.callfunctions} className="Try-button">Try Again</button>
                </div>
            )
        }
        else{
            return(
                <div className="forloader">
                    <ClipLoader
                        height="80"
                        width="80"
                        color="#4CAF50"  // nice green color
                        ariaLabel="loading"
                    />
                </div>
            )
        }
    }
}

function withRouter(Component) {
  return props => {
    const navigate = useNavigate();
    const params = {}; // useParams() if needed
    const location = {}; // useLocation() if needed
    return <Component {...props} navigate={navigate} params={params} location={location} />;
  };
}

export default withRouter(AllCoins);