import { useState, useEffect } from "react";

export function FetchPrices() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        //   console.log(response);
        return response.json();
      })
      .then((d) => {
        console.log(d);

        setCoins(d.data);
      });
  }, []);

  return coins;
}
