import React, { useState, useEffect } from "react";

const EthereumExchangeFlowChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      console.log(response.json());
      const jsonData = await response.json();
      console.log(jsonData, "json data");
      const ethereumPrice = jsonData.ethereum.usd;
      const exchangeData = await fetch(
        "https://api.etherscan.io/api?module=account&action=txlist&address=0x742d35Cc6634C0532925a3b844Bc454e4438f44e&startblock=0&endblock=99999999&sort=desc&apikey=YourEtherscanAPIKey"
      );
      const exchangeJsonData = await exchangeData.json();
      const exchangeTransactions = exchangeJsonData.result;
      const flowData = exchangeTransactions.map((transaction) => {
        return {
          from: transaction.from,
          to: transaction.to,
          value: transaction.value,
        };
      });
      setData(flowData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Ethereum Exchange Flow Chart</h1>
      <p>Current Ethereum price: ${data[0].value}</p>
      <ul>
        {data.map((transaction, index) => (
          <li key={index}>
            {transaction.from} - {transaction.to} : {transaction.value} ETH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EthereumExchangeFlowChart;
