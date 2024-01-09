import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [txidInput, setTxidInput] = useState("");
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState();

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
        console.error("error to fetch API");
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

  function SearchSnow() {
    if (txidInput === "") {
      emptyString.classList.remove("hide");
      setTimeout(() => {
        emptyString.classList.add("hide");
      }, 5000);
    } else {
      const url = `https://snowtrace.io/tx/${txidInput}`;

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

  function clear() {
    setTxidInput("");
  }

  return (
    <main>
      {" "}
      <Head>
        <title>txID Network Finder</title>
      </Head>
      {/* nav bar API Return */}
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
        <h4 className="input-center title">Transaction ID network Finder</h4>
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
      {/* instructions + TXID Input */}
      <div className="tx">
        <div className="instructions">
          <p className="input-center step">01. </p>
          <label htmlFor="txid">Paste 0x hash below</label>
        </div>
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
      </div>
      {/* All buttons */}
      <div className="all-buttons container-fluid">
        <div className=" row d-flex text-center">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn  " onClick={SearchEth}>
              <Image
                src={"/eth.svg"}
                width={20}
                height={20}
                alt="Ethereum logo"
              ></Image>
              <span className="coin">Ethereum</span>
              <div className="button-inner">
                <Image
                  className="new-tab"
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchArbitrum}>
              <Image
                src={"/arbitrum.svg"}
                width={20}
                height={20}
                alt="Arbitrum logo"
              ></Image>
              <span className="coin">Arbitrum</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchBSC}>
              <Image
                src={"/bsc.svg"}
                width={20}
                height={20}
                alt="BSC logo"
              ></Image>
              <span className="coin">BSC</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchPolygon}>
              <Image
                src={"/matic.svg"}
                width={20}
                height={20}
                alt="Polygon logo"
              ></Image>
              <span className="coin"> Polygon</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>

          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchSnow}>
              <Image
                src={"/avax.svg"}
                width={20}
                height={20}
                alt="Snowtrace logo"
              ></Image>
              <span className="coin">Snowtrace</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchFantom}>
              <Image
                src={"/fantom.svg"}
                width={20}
                height={20}
                alt="Fantom logo"
              ></Image>
              <span className="coin"> Fantom</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchHeco}>
              <Image
                src={"/heco.svg"}
                width={20}
                height={20}
                alt="Heco logo"
              ></Image>
              <span className="coin">Heco</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchOptimism}>
              <Image
                src={"/optimism.svg"}
                width={20}
                height={20}
                alt="Optimism logo"
              ></Image>
              <span className="coin">Optimism</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchCronos}>
              <Image
                src={"/cronoss.svg"}
                width={20}
                height={20}
                alt="Cronos logo"
              ></Image>
              <span className="coin">Cronos</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn" onClick={SearchKlay}>
              <Image
                src={"/klay.svg"}
                width={20}
                height={20}
                alt="Klay logo"
              ></Image>
              <span className="coin">Klay</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchZksync}>
              <Image
                src={"/zksync.svg"}
                width={20}
                height={20}
                alt="ZKSync logo"
              ></Image>
              <span className="coin">ZkSync Era</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn " onClick={SearchKCC}>
              <Image
                src={"/kucoin.svg"}
                width={20}
                height={20}
                alt="Kucoin logo"
              ></Image>
              <span className="coin">KCC</span>
              <div className="button-inner">
                <Image
                  src={"/newTab.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
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
