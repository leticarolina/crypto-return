import { useEffect, useState } from "react";

export function useCoin(coinInput) {
  const [price, setPrice] = useState(null);
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
        setPrice(data[0].price);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log(coinInput, coinInput.length);
    if (coinInput.length === 3) {
      fetchData();
    }
  }, [coinInput]);

  return [loading, price];
}

// export function useCoin() {
//     const [num, setNum] = useState(null);

//     useEffect(() => {
//       setNum(1234);
//     }, []);

//     return num;
//   }
