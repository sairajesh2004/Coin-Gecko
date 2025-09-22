import { Component } from "react"
import {useNavigate} from 'react-router-dom'
import { IoFlame } from "react-icons/io5"
import Header from '../Header'
import { IoIosRocket } from "react-icons/io"
import { MdOutlineSmsFailed } from "react-icons/md"
import SmallLengthCoinTrending from "../SmallLengthCoinTrending"
import SmallLengthCoinTopGainers from "../SmallLengthCoinTopGainers"
import SmallLengthCoinTopLosers from "../SmallLengthCoinTopLosers"
import SmallLengthCoinPrice from "../SmallLengthCoinPrice"
import SmallLengthCoinVolume from "../SmallLengthCoinVolume"
import { TailSpin } from "react-spinners"
import './index.css'

class AllHighlights extends Component{
    state = {statusnow:'PROGRESS',trendingdata:[],sortedtopgainers:[],sortedtoplosers:[],sortednewcoins:[],pricechangedata:[],sortedvolumes:[],activeBtn:[]}

    onsucessstrending= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortedtoplosers,trendingdata} = this.state
        this.setState({trendingdata: thedata.coins.slice(0,7),statusnow:'SUCCESS'})
    }

    onsucessstopgainers= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        
        this.setState({sortedtopgainers: thedata.slice(0,7),statusnow:'SUCCESS'})
    }

    onsucessstoplosers= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortedtoplosers,trendingdata} = this.state
        
        this.setState({sortedtoplosers: thedata.slice(0,7),statusnow:'SUCCESS'})
    }

    onsucesssnewcoins= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortedtoplosers,sortednewcoins,trendingdata} = this.state
        console.log('onsucesssnew')
        console.log(thedata)
        this.setState({sortednewcoins: thedata.slice(0,7),statusnow:'SUCCESS'})
    }

    onsucessspricechange= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortedtoplosers,sortednewcoins,pricechangedata,trendingdata} = this.state
        console.log('onsucesssnew')
        console.log(thedata)
        this.setState({pricechangedata: thedata.slice(0,7),statusnow:'SUCCESS'})
    }

    onsucessshighvolumes= (thedata) => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortedtoplosers,sortednewcoins,pricechangedata,trendingdata} = this.state
        console.log('onsucesssnew')
        console.log(thedata)
        this.setState({sortedvolumes: thedata.slice(0,7),statusnow:'SUCCESS'})
    }

    onfailure= () => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        this.setState({statusnow:'FAILURE'})
    }

    componentDidMount(){
        this.calltrendingdata()
        this.calltopgainers()
        this.calltoplosers()
        this.callnewcoins()
        this.callpricechange()
        this.callhighvolumes()
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
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&price_change_percentage=24h'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response2 = await fetch(url,options)
        if(response2.ok){
            const data2 = await response2.json()
            this.onsucessstopgainers(data2)
        }
        else{
            this.onfailure()
        }
    }

    calltoplosers= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_asc&price_change_percentage=24h'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response3 = await fetch(url,options)
        if(response3.ok){
            const data3 = await response3.json()
            this.onsucessstoplosers(data3)
        }
        else{
            this.onfailure()
        }
    }

    callnewcoins= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortednewcoins,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&per_page=10&page=1'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response4 = await fetch(url,options)
        if(response4.ok){
            const data4 = await response4.json()
            console.log('incoins')
            console.log(data4)
            this.onsucesssnewcoins(data4)
        }
        else{
            this.onfailure()
        }
    }

    callpricechange= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortednewcoins,pricechangedata,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=1h,24h,7d'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response5 = await fetch(url,options)
        if(response5.ok){
            const data5 = await response5.json()
            console.log('incoins')
            console.log(data5)
            this.onsucessspricechange(data5)
        }
        else{
            this.onfailure()
        }
    }

    callhighvolumes= async() => {
        const {statusnow,coindata,activeBtn,sortedtopgainers,sortednewcoins,pricechangedata,trendingdata} = this.state
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkline=false'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response6 = await fetch(url,options)
        if(response6.ok){
            const data6 = await response6.json()
            console.log('incoins')
            console.log(data6)
            this.onsucessshighvolumes(data6)
        }
        else{
            this.onfailure()
        }
    }

    render(){
        const {statusnow,coindata,activeBtn,trendingdata,sortedtopgainers,sortedtoplosers,sortednewcoins,pricechangedata,sortedvolumes} = this.state
        
        if(statusnow==="SUCCESS"){
        return(
            <>
                <Header/>
                <div className="Mainhome">
                    <div className="upperhomedetails">
                        <h1>Cryptocurrency Prices by Market Cap</h1>
                        <p>The global cryptocurrency market cap today is $4.06 Trillion, a 2.2% change in the last 24 hours.</p>
                    </div>
                    <div className="buttonscont">
                            {
                                activeBtn.includes('all') ? (<button onClick={this.movetoall} value="all" className="green">All</button>) : (<button onClick={this.movetoall} value="all" className="white">All</button>)
                            }
                            {
                                activeBtn.includes('highlights') ? (<button onClick={this.movetohighlights} value="highlights" className="green">Highlights</button>) : (<button onClick={this.movetohighlights} value="highlights" className="white">Highlights</button>)
                            }
                        </div>
                    <div className="midhome">
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <IoFlame style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>Trending</h3>
                                
                            </div>
                            <div className="columnhead">
                                <h4 >Price</h4>
                                <h4>M_rank</h4>
                            </div>
                            {
                            
                                trendingdata.map(each => (
                                    <SmallLengthCoinTrending smalldata={each} key={each.id}/>
                                ))
                            }
                            
                        </div>
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <IoIosRocket style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>Top Gainers</h3>
                            </div>
                            <div className="columnhead">
                                <h4 >Price</h4>
                                <h4>High_24h</h4>
                            </div>
                            {
                                sortedtopgainers.map(each => (
                                    <SmallLengthCoinTopGainers smalldata={each} key={each.id}/>
                                ))
                            }
                        </div>
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <MdOutlineSmsFailed style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>Top Losers</h3>
                            </div>
                            <div className="columnhead">
                                <h4 >Price</h4>
                                <h4>Low_24h</h4>
                            </div>
                            {
                                sortedtoplosers.map(each => (
                                    <SmallLengthCoinTopLosers smalldata={each} key={each.id}/>
                                ))
                            }
                        </div>
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <IoIosRocket style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>New Coins</h3>
                            </div>
                            <div className="columnhead">
                                <h4 >Price</h4>
                                <h4>24h</h4>
                            </div>
                            {
                                sortednewcoins.map(each => (
                                    <SmallLengthCoinTopGainers smalldata={each} key={each.id}/>
                                ))
                            }
                        </div>
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <IoIosRocket style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>Price Change since ATH (%)</h3>
                            </div>
                            <div className="columnhead">
                                <h4 >Since ATH %</h4>
                            </div>
                            {
                                pricechangedata.map(each => (
                                    <SmallLengthCoinPrice smalldata={each} key={each.id}/>
                                ))
                            }
                        </div>
                        <div className="trendingconthome1">
                            <div className="statscontheading">
                                <IoIosRocket style={{fontSize: '30px',marginRight: '10px'}}/>
                                <h3>Highest Volumes</h3>
                            </div>
                            <div className="columnhead">
                                <h4>Volumes</h4>
                            </div>
                            {
                                sortedvolumes.map(each => (
                                    <SmallLengthCoinVolume smalldata={each} key={each.id}/>
                                ))
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
                    <TailSpin
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
    const params = {}; 
    const location = {};
    return <Component {...props} navigate={navigate} params={params} location={location} />;
  };
}

export default withRouter(AllHighlights);