// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch data from the CoinGecko API
    fetchCryptoData();
  
    // Fetch cryptocurrency data from the CoinGecko API
    function fetchCryptoData() {
      // Define the API endpoint and options
      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
      
      // Use fetch() to send a request to the API
      fetch(url)
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
          displayCryptoData(data); // Call function to display data on the webpage
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Log any errors
        });
    }
  
    // Function to display fetched data on the webpage
    function displayCryptoData(data) {
      const cryptoContainer = document.getElementById('crypto-data');
      
      data.forEach(crypto => {
        // Create a div for each cryptocurrency
        const cryptoDiv = document.createElement('div');
        cryptoDiv.classList.add('crypto');
  
        // Add the cryptocurrency's name and current price to the div
        cryptoDiv.innerHTML = `
          <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
          <p>Current Price: $${crypto.current_price}</p>
          <p>Market Cap: $${crypto.market_cap}</p>
        `;
  
        // Append the cryptoDiv to the container
        cryptoContainer.appendChild(cryptoDiv);
      });
    }
  });