const CryptoData = require("../models/cryptoData");

exports.getStats = async (req, res) => {
    try {
        const { coin } = req.query;

        const latestData = await CryptoData.findOne({ coin })
            .sort({ timestamp: -1 })
            .exec();

        if (!latestData) {
            return res.status(404).json({ message: "No data found for the specified coin." });
        }

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
