import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [txidInput, setTxidInput] = useState("");
  const [coins, setCoins] = useState([]);
  // const emptyString = document.querySelector(".empty-input");

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
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://etherscan.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchArbitrum() {
    console.log("arb");
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://arbiscan.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchBSC() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://bscscan.com/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchPolygon() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://polygonscan.com/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchAvalanche() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://avascan.info/blockchain/c/tx/${txidInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchFantom() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://ftmscan.com/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchHeco() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://hecoscan.io/#/transaction/${txidInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchOptimism() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://optimistic.etherscan.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchCronos() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://cronoscan.com/tx/${txidInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchxDAI() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://gnosisscan.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchCardano() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://cardanoscan.io/transaction/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchTron() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://tronscan.org/#/transaction/${txidInput}`;

      window.open(url, "_blank");
    }
  }

  function SearchZksync() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://explorer.zksync.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchTomo() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://tomoscan.io/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchBoba() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://bobascan.com/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }
  function clear() {
    setTxidInput("");
  }
  // function SearchAll() {
  //   if (txidInput === "") return;
  //   const urls = [
  //     `https://etherscan.io/tx/${txidInput}`,
  //     `https://arbiscan.io/tx/${txidInput}`,
  //     // `https://bscscan.com/tx/${txidInput}`,
  //   ];
  //   urls.forEach((url) => {
  //     console.log(url);
  //     window.open(url, "_blank");
  //   });
  // }

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
      <Link className="link" href="/address-finder">
        Adddress Network Finder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </Link>
      {/* <button className="address-finder" onClick={openAddressFinder}>
        Network Adddress Finder
      </button> */}
      <div className="tx">
        <p className="input-center">Step 1</p>
        <label htmlFor="txid">Input txID here:</label>
        <div className="input-center">
          {" "}
          <input
            type="text"
            id="txid"
            value={txidInput}
            onChange={(e) => setTxidInput(e.target.value)}
          />
          <button onClick={clear}>Clear</button>{" "}
        </div>
        <p className="empty-input hide">
          Please provide a txID before searching.
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
              <button className="btn btn-primary" onClick={SearchBoba}>
                Boba
              </button>
            </div>
          </div>

          {/* <button className="btn" onClick={SearchAll}>
            Seach All
          </button> */}
        </div>
      </div>
    </main>
  );
}
