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
      const url = `https://explorer.zksync.io/address/${address}`;
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
      const url = `https://tomoscan.io/address/${address}`;
      window.open(url, "_blank");
    }
  }

  function SearchBitcoin() {
    if (address === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://www.blockchain.com/explorer/addresses/btc/${address}`;
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
      <Link className="link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Transaction Network Finder
      </Link>
      {/* <button className="address-finder" onClick={openAddressFinder}>
      Network Adddress Finder
    </button> */}
      <div className="tx">
        <p className="input-center">Step 1</p>

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
        <p className="input-center">Step 2</p>
        <p className="input-center">
          Click on the desired network to search given txID:
        </p>
        <div className="all-buttons container">
          <div className="row d-flex text-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary " onClick={SearchEth}>
                ETH
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchArbitrum}>
                ARBITRUM
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchBSC}>
                BSC
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchPolygon}>
                Polygon
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchAvalanche}>
                Avalanche
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchFantom}>
                Fantom
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchHeco}>
                Heco
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchOptimism}>
                Optimism
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchCronos}>
                Cronos
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchxDAI}>
                xDAI
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchCardano}>
                Cardano
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchTron}>
                TronSCAN
              </button>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={SearchZksync}>
                zkSync Era
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchTomo}>
                Tomo Chain
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn btn-primary" onClick={SearchBitcoin}>
                Bitcoin
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
