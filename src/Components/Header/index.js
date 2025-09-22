import { Component } from "react"
import { IoMdSettings } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import './index.css'

class Header extends Component{
    state={coins:0, exchanges:0, marketcap:0,for24vol:0, bitdominance: 0, ethdominance: 0, gas:0 }

    componentDidMount(){
        this.callforheaderdata()
    }

    onsucesssheaderdata= (data) => {
        const {coins,exchanges,marketcap,for24vol,dominance,gas}  = this.state
        this.setState({coins: data.data.active_cryptocurrencies,exchanges: data.data.markets,marketcap: data.data.total_market_cap.usd, for24vol: data.data.total_volume.usd, bitdominance: data.data.market_cap_percentage.btc, ethdominance: data.data.market_cap_percentage.eth,gas: data.data.market_cap_percentage.bnb.toFixed(4)})
    }

    callforheaderdata= async() => {
        const {coins,exchanges,marketcap,for24vol,dominance,gas}  = this.state
        const url = 'https://api.coingecko.com/api/v3/global'
        const options = {
            method: 'GET',
            headers: {
                "x-cg-demo-api-key": "CG-sy66TrZ9YfznHxrkbFMPxzyB",
            }
        }
        const response6 = await fetch(url,options)
        if(response6.ok){
            const data6 = await response6.json()
            console.log('forheader')
            console.log(data6)
            this.onsucesssheaderdata(data6)
        }
        else{
            this.onfailure()
        }
    }

    render(){
         const {coins,exchanges,marketcap,for24vol,bitdominance,ethdominance,gas}  = this.state

         return(
            <div className="Headeroutercont">
                <div className="Headeruppercont">
                    <ul className="Detailscont">
                        <li className="Eachdetailshead">
                            Coins:{' '}
                            <span className="Highlightedcontent">
                            {coins}
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            Exchanges:{' '}
                            <span className="Highlightedcontent">
                            {exchanges.toLocaleString()}
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            Market Cap:{' '}
                            <span className="Highlightedcontent">
                            $ {(marketcap / 1e12).toFixed(2)}T
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            24h Vol:{' '}
                            <span className="Highlightedcontent">
                            $ {(for24vol / 1e9).toFixed(2)}B
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            BitCoin-Dominance:{' '}
                            <span className="Highlightedcontent">
                            {bitdominance.toFixed(1)}%
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            Etherum-Dominance:{' '}
                            <span className="Highlightedcontent">
                            {ethdominance.toFixed(1)}%
                            </span>
                        </li>
                        <li className="Eachdetailshead">
                            Gas:{' '}
                            <span className="Highlightedcontent">
                            {gas} GWEI
                            </span>
                        </li>
                    </ul>
                    <ul className="Buttoncont">
                        <button className="Forheaderbutton"><IoMdSettings/></button>
                        <button className="Forheaderbutton"><CgProfile/></button>
                        <button className="Forheaderbuttonad">Go Ad-free</button>
                    </ul>
                </div>
                <hr className="Hrtag"/>
                <div className="Headerlowercont">
                    <div className="Imagecont">
                        <img src="https://yt3.googleusercontent.com/JJFCdcykh7qxeXqmC8LuodMMS0wuE9Datth2m0fe-hiIMHgm8KKgpvFfrZtXN26j7OGzc6j_gQ=s900-c-k-c0x00ffffff-no-rj" alt="coin-geckologo" className="Geckologo"/>
                        <h1 className="logoname">Coin{' '}Gecko</h1>
                    </div>
                    <div className="basicdetails">
                        <h3 className="basicdata">Cryptocurrencies</h3>
                        <h3 className="basicdata">Exchanges</h3>
                        <h3 className="basicdata">NFT</h3>
                        <h3 className="basicdata">Learn</h3>
                        <h3 className="basicdata">Products</h3>
                        <h3 className="basicdata">API</h3>
                    </div>
                    <input placeholder="Search" className="Headersearch"/>
                </div>
                <hr className="Hrtag"/>
            </div>
         )
    }
}

export default Header