import Link from "next/link";
import { useState, useEffect } from "react";

export default function AddressFinder() {
  const [address, setAddress] = useState("");
  const [coins, setCoins] = useState([]);

  let emptyString;

  useEffect(() => {
    emptyString = document.querySelector(".empty-input");
  });

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
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://etherscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchArbitrum() {
    console.log("arb");
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://arbiscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchBSC() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://bscscan.com/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchPolygon() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://polygonscan.com/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchAvalanche() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://avascan.info/blockchain/all/address/${address}`;

      window.open(url, "_blank");
    }
  }

  function SearchFantom() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://ftmscan.com/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchHeco() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://hecoscan.io/#/address/${address}`;

      window.open(url, "_blank");
    }
  }

  function SearchOptimism() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://optimistic.etherscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchCronos() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://cronoscan.com/address/${address}`;

      window.open(url, "_blank");
    }
  }

  function SearchxDAI() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://gnosisscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchCardano() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://cardanoscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchTron() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://tronscan.org/#/address/${address}`;

      window.open(url, "_blank");
    }
  }

  function SearchZksync() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://explorer.zksync.io/tx/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchTomo() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://tomoscan.io/tx/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchBoba() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://bobascan.com/tx/${address}`;
      window.open(url, "_blank");
    }
  }

  function clear() {
    setAddress("");
  }
  return (
    <main>
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
      <Link href="/">Transaction Network Finder</Link>
      {/* <button className="address-finder" onClick={openAddressFinder}>
      Network Adddress Finder
    </button> */}
      <div className="tx">
        <label htmlFor="txid">Input Address:</label>
        <div className="input-center">
          {" "}
          <input
            type="text"
            id="txid"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={clear}>Clear</button>{" "}
        </div>

        <p className="empty-input hide">
          Please provide an address before searching.
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
        </div>
      </div>
    </main>
  );
}
