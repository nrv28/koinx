const axios = require("axios");
const CryptoData = require("../models/cryptoData");

const COINS = ["bitcoin", "matic-network", "ethereum"];
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/simple/price";

const fetchCryptoData = async () => {
    try {
        const response = await axios.get(COINGECKO_API_URL, {
            params: {
                ids: COINS.join(","),
                vs_currencies: "usd",
                include_market_cap: "true",
                include_24hr_change: "true",
            },
        });

        const data = response.data;

        for (const coin of COINS) {
            const coinData = new CryptoData({
                coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change,
            });

            await coinData.save();
        }
        console.log("Crypto data fetched and stored.");
    } catch (error) {
        console.error("Error fetching crypto data:", error.message);
    }
};

module.exports = fetchCryptoData;
