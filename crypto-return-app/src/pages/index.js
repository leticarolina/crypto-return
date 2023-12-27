import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [txidInput, setTxidInput] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState();
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
      })
      .catch((err) => {
        setError(err);
        console.error("error occured");
      });

    const scrollingNav = document.querySelector("#coin");
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

  function SearchKlay() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://klaytnscope.com/tx/${txidInput}`;
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

  function SearchKCC() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://explorer.kcc.io/en/tx/${txidInput}`;
      window.open(url, "_blank");
    }
  }

  function SearchBitcoin() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://www.blockchain.com/explorer/transactions/btc/${txidInput}`;
      window.open(url, "_blank");
    }
  }
  function clear() {
    setTxidInput("");
  }

  return (
    <main>
      {/* API Return */}
      <nav id="coin">
        <ul>
          {coins.map(({ id, name, priceUsd }) => (
            <li key={id}>
              <span>{name}</span>
              <span> ${parseFloat(priceUsd).toFixed(2)}</span>
              <span className="spacer"> |</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header */}
      <nav className="head">
        <h4 className="input-center title">Transaction network Finder</h4>
        <Link className="link " href="/address-finder">
          Visit Address Network Finder
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Link>
      </nav>
      <div className="tx">
        <div className="instructions">
          <p className="input-center step">01. </p>
          <label htmlFor="txid">Paste 0x hash below</label>
        </div>

        {/* TXID Input */}
        <div className="input-center">
          <input
            placeholder="Paste 0x txID here..."
            className="input w-50"
            type="text"
            id="txid"
            value={txidInput}
            onChange={(e) => setTxidInput(e.target.value)}
          />
          <button onClick={clear} className="clear">
            Clear
          </button>{" "}
        </div>
        <p className="empty-input hide">
          Please provide a txID before searching.
        </p>
        <div className="instructions">
          <p className="input-center step">02. </p>
          <p className="input-center">
            Click on the desired network to search given txID
          </p>
        </div>

        {/* All buttons */}
        <div className="all-buttons container-fluid">
          <div className="row d-flex text-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn  " onClick={SearchEth}>
                <span className="coin">Ethereum</span>{" "}
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchArbitrum}>
                <span className="coin">Arbitrum</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchBSC}>
                <span className="coin">BSC</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchPolygon}>
                <span className="coin">Polygon</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchAvalanche}>
                <span className="coin">Avalanche</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchFantom}>
                <span className="coin"> Fantom</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchHeco}>
                <span className="coin">Heco</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchOptimism}>
                <span className="coin">Optimism</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchCronos}>
                <span className="coin">Cronos</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn" onClick={SearchKlay}>
                <span>Klay</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>

            {/* <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchCardano}>
                <span className="coin">Cardano</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div> */}

            {/* <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchTron}>
                <span className="coin">TRON</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div> */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchZksync}>
                <span className="coin">ZkSync Era</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <button className="btn " onClick={SearchKCC}>
                <span>KCC Explorer</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>

            {/* <div className="col-6 col-sm-6 col-md-4 col-lg-4">
              <button className="btn " onClick={SearchBitcoin}>
                <span>Bitcoin</span>
                <div className="button-inner">
                  <Image
                    className="new-tab"
                    src={"/newTab.svg"}
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <footer>
        Copyright © 2023{" "}
        <a href="https://www.letiazevedo.com/" className="my-site">
          Leticia Azevedo
        </a>
        . All Rights Reserved.
      </footer>
    </main>
  );
}
