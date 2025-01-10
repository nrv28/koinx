const CryptoData = require("../models/cryptoData");

exports.getDeviation = async (req, res) => {
    try {
        const { coin } = req.query;

        const data = await CryptoData.find({ coin })
            .sort({ timestamp: -1 })
            .limit(100)
            .exec();

        if (data.length === 0) {
            return res.status(404).json({ message: "Not enough data for the specified coin." });
        }

        const prices = data.map(record => record.price);

        const mean =
            prices.reduce((acc, curr) => acc + curr, 0) / prices.length;

        const variance =
            prices.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / prices.length;

        const standardDeviation = Math.sqrt(variance);

        res.json({ deviation: standardDeviation.toFixed(2) });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
