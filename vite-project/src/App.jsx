import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [coinData, setCoinData] = useState(null);
  const [coinInput, setCoinInput] = useState("");
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch(`https://api.minerstat.com/v2/coins?list=${coinInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCoinData(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      {/* {coinData ? (
        <div>{JSON.stringify(coinData[0].price)}</div>
      ) : (
        <div>Loading...</div>
      )} */}
      {coinData && <div>{JSON.stringify(coinData[0].price)}</div>}
      {loading && <div>Loading!</div>}

      <label htmlFor="coinInput"> Coin:</label>
      <input
        type="text"
        id="coinInput"
        value={coinInput}
        onChange={(e) => setCoinInput(e.target.value)}
      />
      <button onClick={fetchData}>Submit</button>
    </div>
  );
}

export default App;
