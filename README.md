# Crypto Server Application

This is a Node.js backend application that fetches cryptocurrency data using the CoinGecko API and provides endpoints to retrieve stats and calculate the standard deviation of prices.

## Features

- Fetch cryptocurrency stats (price, market cap, and 24-hour change) for Bitcoin, Ethereum, and Matic every 2 hours.
- Store the fetched data in MongoDB.
- Provide APIs for:
  - Retrieving the latest stats for a cryptocurrency.
  - Calculating the standard deviation of the price for the last 100 records.

---

## Project Structure

```plaintext
  crypto_server_app/
  │
  ├── config/
  │   └── db.js                # MongoDB connection configuration
  ├── controllers/
  │   ├── statsController.js   # Logic for retrieving cryptocurrency stats
  │   └── deviationController.js # Logic for calculating standard deviation
  ├── routes/
  │   └── apiRoutes.js         # API routes definitions
  ├── models/
  │   └── cryptoData.js        # Mongoose schema for storing cryptocurrency data
  ├── jobs/
  │   └── fetchCryptoData.js   # Background job to fetch cryptocurrency data
  ├── .env                     # Environment variables (e.g., MONGO_URI, PORT)
  ├── server.js                # Main entry point of the application
  └── package.json             # Project metadata and dependencies

## Installation and Setup

### 1. Clone the Repository

Run the following commands to clone the repository and navigate into the project directory:

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd crypto_server_app
