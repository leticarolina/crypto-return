import { useEffect, useState } from "react";
import { FetchPrices } from "./FetchPrices";
// import { SearchArbitrum, SearchEth } from "./SearchEth";

function App() {
  const [coinInput, setCoinInput] = useState("");
  const [coins, setCoins] = useState([]);
  const emptyString = document.querySelector(".empty-input");

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        console.log(d);
        setCoins(d.data);
      });

    const scrollingNav = document.querySelector("nav");
    setInterval(() => {
      scrollingNav.scrollLeft = scrollingNav.scrollLeft + 0.7;
    }, 30);
  }, []);

  function SearchEth() {
    console.log("eth");
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://etherscan.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchArbitrum() {
    console.log("arb");
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://arbiscan.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchBSC() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://bscscan.com/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchPolygon() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://polygonscan.com/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchAvalanche() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://avascan.info/blockchain/c/tx/${coinInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchFantom() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://ftmscan.com/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchHeco() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://hecoscan.io/#/transaction/${coinInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchOptimism() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://optimistic.etherscan.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchCronos() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://cronoscan.com/tx/${coinInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchxDAI() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://gnosisscan.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchCardano() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://cardanoscan.io/transaction/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchTron() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://tronscan.org/#/transaction/${coinInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchZksync() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://explorer.zksync.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchTomo() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://tomoscan.io/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchBoba() {
    if (coinInput === "") {
      emptyString.classList.remove("hide");
    } else {
      const url = `https://bobascan.com/tx/${coinInput}`;
      window.open(url, "_blank");
    }
  }

  // function SearchAll() {
  //   if (coinInput === "") return;
  //   const urls = [
  //     `https://etherscan.io/tx/${coinInput}`,
  //     `https://arbiscan.io/tx/${coinInput}`,
  //     // `https://bscscan.com/tx/${coinInput}`,
  //   ];
  //   urls.forEach((url) => {
  //     console.log(url);
  //     window.open(url, "_blank");
  //   });
  // }

  function openAddressFinder() {
    window.open();
  }

  return (
    <div>
      <nav>
        <ul>
          {coins.map(({ id, name, priceUsd }) => (
            <li key={id}>
              <span>{name}</span>
              <span> ${parseFloat(priceUsd).toFixed(2)}</span>
              <span> |</span>
            </li>
          ))}
        </ul>
      </nav>
      <button className="address-finder" onClick={openAddressFinder}>
        Network Adddress Finder
      </button>
      <div className="tx">
        <label htmlFor="txid">
          Input txID:
          <input
            type="text"
            id="txid"
            value={coinInput}
            onChange={(e) => setCoinInput(e.target.value)}
          />
        </label>
        <p className="empty-input hide">
          Please provide a txID before searching.
        </p>

        <div className="all-buttons">
          <button className="btn" onClick={SearchEth}>
            ETH
          </button>
          <button className="btn" onClick={SearchArbitrum}>
            ARBITRUM
          </button>
          <button className="btn" onClick={SearchBSC}>
            BSC
          </button>
          <button className="btn" onClick={SearchPolygon}>
            Polygon
          </button>
          <button className="btn" onClick={SearchAvalanche}>
            Avalanche
          </button>
          <button className="btn" onClick={SearchFantom}>
            Fantom
          </button>
          <button className="btn" onClick={SearchHeco}>
            Heco
          </button>
          <button className="btn" onClick={SearchOptimism}>
            Optimism
          </button>

          <button className="btn" onClick={SearchCronos}>
            Cronos
          </button>

          <button className="btn" onClick={SearchxDAI}>
            xDAI
          </button>

          <button className="btn" onClick={SearchCardano}>
            Cardano
          </button>

          <button className="btn" onClick={SearchTron}>
            TronSCAN
          </button>

          <button className="btn" onClick={SearchZksync}>
            zkSync Era
          </button>

          <button className="btn" onClick={SearchTomo}>
            Tomo Chain
          </button>

          <button className="btn" onClick={SearchBoba}>
            Boba
          </button>

          {/* <button className="btn" onClick={SearchAll}>
            Seach All
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
// <div>
//   {loading && <div>Loading...</div>}
//   <label htmlFor="coinInput">Coin:</label>
//   <input
//     type="text"
//     id="coinInput"
//     value={coinInput}
//     onChange={(e) => setCoinInput(e.target.value)}
//   />
//   <button>Submit</button>
//   <div>{price}</div>
// </div>
