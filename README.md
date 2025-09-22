# 🚀 Crypto Dashboard (CoinGecko Assignment)

This project is a **React.js cryptocurrency dashboard** built as a company assignment.  
It fetches real-time data from the **CoinGecko API** and displays coins, market highlights, trending coins, top gainers, losers, and more.

---

## 📌 Features
- 📊 **All Coins View** – Top 100 coins with price, 1h/24h/7d change, volume, and market cap.  
- 🔥 **Trending Coins** – Top 3 trending coins from CoinGecko.  
- 🚀 **Top Gainers** – Top 3 coins with the highest 24h gain.  
- 📉 **Top Losers** – (In Highlights) Top 7 losers in 24h.  
- 🆕 **New Coins** – Recently added coins.  
- 📈 **ATH/Price Change** – Change since All Time High.  
- 💰 **High Volumes** – Coins with highest trading volumes.  
- ⚡ **Dynamic Routing** – Switch between `All Coins` and `Highlights`.  
- ✅ Error Handling – Displays a failure image + retry button when API fails.  
- ⏳ Loader – Green spinner shown while fetching API data.  

---

## 🛠️ Tech Stack
- **React.js** (Class Components + Router v6)
- **CoinGecko API**
- **React Router DOM**
- **React Icons**
- **React Spinners** (green `ClipLoader` for loading state)
- **CSS3** (custom styling)

---

## 📂 Project Structure
src/
├── Components/
│ ├── AllCoins/
│ ├── AllHighlights/
│ ├── Header/
│ ├── SmallLengthCoinTrending/
│ ├── SmallLengthCoinTopGainers/
│ ├── SmallLengthCoinTopLosers/
│ ├── SmallLengthCoinPrice/
│ ├── SmallLengthCoinVolume/
│ └── FullLengthCoin/
├── App.js
└── index.js

---

## ⚙️ Installation & Setup

Clone the repository:
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

```

## To install dependencies
```bash
npm install
```

## To start development server
```bash
npm start
```

##🚀 Deployment

This project is deployed on Vercel.

To deploy manually:

1. Push your repo to GitHub.
2. Connect the repo on Vercel
3. Set Build Command: npm run build
4. Set Output Directory: build
5. Deploy 🚀

##APIs Used

Global Data:
https://api.coingecko.com/api/v3/global

Trending Coins:
https://api.coingecko.com/api/v3/search/trending

Market Data (Top 100):
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&price_change_percentage=1h,24h,7d

Top Gainers/Losers:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_asc

New Coins / High Volume:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&per_page=10&page=1
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1

