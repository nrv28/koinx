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

crypto_server_app/ │ ├── config/ │ └── db.js # MongoDB connection configuration ├── controllers/ │ ├── statsController.js # Logic for retrieving cryptocurrency stats │ └── deviationController.js # Logic for calculating standard deviation ├── routes/ │ └── apiRoutes.js # API routes definitions ├── models/ │ └── cryptoData.js # Mongoose schema for storing cryptocurrency data ├── jobs/ │ └── fetchCryptoData.js # Background job to fetch cryptocurrency data ├── .env # Environment variables (e.g., MONGO_URI, PORT) ├── server.js # Main entry point of the application └── package.json # Project metadata and dependencies

yaml
Copy code

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repository>.git
   cd crypto_server_app
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables Create a .env file in the root directory and add:

env
Copy code
MONGO_URI=mongodb://localhost:27017/cryptoApp
PORT=5000
Run the Application

For development:
bash
Copy code
npm run dev
For production:
bash
Copy code
npm start
APIs
1. /api/stats
Retrieve the latest stats for a cryptocurrency.

Method: GET
Query Parameters:
coin: The cryptocurrency ID (e.g., bitcoin, ethereum, matic-network).
Sample Request:
bash
Copy code
curl "http://localhost:5000/api/stats?coin=bitcoin"
Sample Response:
json
Copy code
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
2. /api/deviation
Calculate the standard deviation of the price for the last 100 records of a cryptocurrency.

Method: GET
Query Parameters:
coin: The cryptocurrency ID (e.g., bitcoin, ethereum, matic-network).
Sample Request:
bash
Copy code
curl "http://localhost:5000/api/deviation?coin=bitcoin"
Sample Response:
json
Copy code
{
  "deviation": 4082.48
}
Background Job
The application includes a background job that runs every 2 hours to fetch the following details for Bitcoin, Ethereum, and Matic:

Current price in USD.
Market capitalization in USD.
24-hour price change percentage.
This data is fetched using the CoinGecko API and stored in MongoDB.

Scripts
Start the server: npm start
Run the server with Nodemon: npm run dev
Technologies Used
Node.js: Backend runtime.
Express.js: Web framework for API creation.
MongoDB: Database for storing cryptocurrency data.
Mongoose: ODM library for MongoDB.
Axios: HTTP client for making API requests.
Dotenv: For managing environment variables.
Future Enhancements
Add more cryptocurrencies for tracking.
Implement authentication for API endpoints.
Add user-specific data tracking and notifications.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Name: Your Name
GitHub: Your GitHub Profile
markdown
Copy code

### Steps to Use
1. Replace placeholders like `<your-username>` and `<your-repository>` with actual details.
2. Save this content in a `README.md` file in the root of your project.

Let me know if you need help customizing it!
