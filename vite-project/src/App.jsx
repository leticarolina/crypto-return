import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [coinData, setCoinData] = useState(null);
  const [coinInput, setCoinInput] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.minerstat.com/v2/coins?list=${coinInput}")
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
        });
    };

    fetchData();
  });

  return (
    <div>
      {coinData ? <div>{JSON.stringify(coinData)}</div> : <div>Loading...</div>}
      <form
        action="
      "
      >
        <label htmlFor="coinInput"> Coin:</label>
        <input
          type="text"
          id="coinInput"
          value={coinInput}
          onChange={(e) => setCoinInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
