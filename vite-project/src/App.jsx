import { useEffect } from "react";
import { useState } from "react";
import { useCoin } from "./useCoin";

function App() {
  const [coinInput, setCoinInput] = useState("");
  const [loading, price] = useCoin(coinInput);

  return (
    <div>
      {loading && <div>Loading...</div>}

      <label htmlFor="coinInput">Coin:</label>
      <input
        type="text"
        id="coinInput"
        value={coinInput}
        onChange={(e) => setCoinInput(e.target.value)}
      />
      <div>{price}</div>
    </div>
  );
}

export default App;
