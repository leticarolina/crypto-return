import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

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

    const scrollingNav = document.querySelector("#coin");
    scrollContent(scrollingNav);
    // const scrollingNav = document.querySelector("nav");
    // setInterval(() => {
    //   scrollingNav.scrollLeft = scrollingNav.scrollLeft + 0.7;
    // }, 30);
  }, []);

  function scrollContent(scrollingNav) {
    setInterval(() => {
      scrollingNav.scrollLeft = scrollingNav.scrollLeft + 0.7;
    }, 30);
  }

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
      <Head>
        <title>Address Network Finder</title>
      </Head>
      {/* nav bar API Return */}
      <nav id="coin">
        <ul>
          {coins.map(({ id, name, priceUsd }) => (
            <li key={id}>
              <span>{name}</span>
              <span> ${parseFloat(priceUsd).toFixed(2)}</span>
              <span className="spacer purp"> |</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header */}
      <nav className="head">
        <h4 className="input-center title purp">Transaction Address Finder</h4>
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
      </nav>

      {/* instructions + Address Input */}
      <div className="tx">
        <div className="instructions">
          <p className="input-center step light">01. </p>
          <label htmlFor="txid">Paste address below</label>
        </div>
        <div className="input-center">
          <input
            placeholder="Paste address here..."
            className="input w-50 purpl"
            type="text"
            id="txid"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={clear} className="clear">
            Clear
          </button>{" "}
        </div>
        <p className="empty-input hide">
          Please provide an address before searching.
        </p>
        <div className="instructions">
          <p className="input-center step light">02. </p>
          <p className="input-center">
            Click on the desired network to search address
          </p>
        </div>
      </div>

      {/* All search buttons */}
      <div className="all-buttons container">
        <div className="row d-flex text-center">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl " onClick={SearchEth}>
              <Image
                src={"/eth.svg"}
                width={20}
                height={20}
                alt="Ethereum logo"
              ></Image>
              <span className="coin">Ethereum</span>{" "}
              <div className="button-inner">
                <Image
                  alt="New tab"
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchArbitrum}>
              <Image
                src={"/arbitrum.svg"}
                width={20}
                height={20}
                alt="Arbitrum logo"
              ></Image>
              <span className="coin">Arbitrum</span>{" "}
              <div className="button-inner">
                <Image
                  alt="New tab"
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchBSC}>
              <Image
                src={"/bsc.svg"}
                width={20}
                height={20}
                alt="BSC logo"
              ></Image>
              <span className="coin">BSC</span>{" "}
              <div className="button-inner">
                <Image
                  alt="New tab"
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchPolygon}>
              <Image
                src={"/matic.svg"}
                width={20}
                height={20}
                alt="Polygon logo"
              ></Image>
              <span className="coin">Polygon</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchAvalanche}>
              <Image
                src={"/avax.svg"}
                width={20}
                height={20}
                alt="Avalanche logo"
              ></Image>
              <span className="coin">Snowtrace</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>

          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchFantom}>
              <Image
                src={"/fantom.svg"}
                width={20}
                height={20}
                alt="Fantom logo"
              ></Image>
              <span className="coin">Fantom</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>

          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchHeco}>
              <Image
                src={"/heco.svg"}
                width={20}
                height={20}
                alt="Heco logo"
              ></Image>
              <span className="coin">Heco</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchOptimism}>
              <Image
                src={"/optimism.svg"}
                width={20}
                height={20}
                alt="Optimism logo"
              ></Image>
              <span className="coin">Optimism</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchCronos}>
              <Image
                src={"/cronoss.svg"}
                width={20}
                height={20}
                alt="Cronos logo"
              ></Image>
              <span className="coin">Cronos</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchCardano}>
              <Image
                src={"/cardano.svg"}
                width={20}
                height={20}
                alt="Cardano logo"
              ></Image>
              <span className="coin">Cardano</span>
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchTron}>
              <Image
                src={"/tron.svg"}
                width={20}
                height={20}
                alt="Tron logo"
              ></Image>
              <span className="coin">TRON</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
                  width={20}
                  height={20}
                  alt="New tab"
                ></Image>
              </div>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <button className="btn purpl" onClick={SearchBitcoin}>
              <Image
                src={"/bitcoin.svg"}
                width={20}
                height={20}
                alt="Bitcoin logo"
              ></Image>
              <span className="coin">Bitcoin</span>{" "}
              <div className="button-inner">
                <Image
                  src={"/newTabAddress.svg"}
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
