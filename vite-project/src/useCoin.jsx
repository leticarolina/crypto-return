import { useEffect, useState } from "react";
// //key e2ef7f11-6fb6-42ee-9fdc-706d99e0ee4f
export function useCoin(coinInput) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const [id, setID] = useState();

  function fetchData() {
    setLoading(true);
    // https://api.minerstat.com/v2/coins?list=${coinInput}
    fetch("api.coincap.io/v2/assets")
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        console.log(response);
        return response.json();
      })
      .then((d) => {
        //  setPrice(data[0].price);
        console.log(d);
        setID(d.data.id);
        setPrice(d.data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // useEffect(() => {
  //   console.log(coinInput, coinInput.length);
  //   // if (coinInput.length === 3) {
  //   if (coinInput.length >= 3) {
  //     fetchData();
  //   }
  // }, [coinInput]);

  return [loading, price];
}

// export function useCoin() {
//     const [num, setNum] = useState(null);

//     useEffect(() => {
//       setNum(1234);
//     }, []);

//     return num;
//   }
