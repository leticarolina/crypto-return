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
      <Link href="/address-finder">Network Adddress Finder</Link>
      {/* <button className="address-finder" onClick={openAddressFinder}>
        Network Adddress Finder
      </button> */}
      <div className="tx">
        <label htmlFor="txid">
          Input txID:
          <input
            type="text"
            id="txid"
            value={txidInput}
            onChange={(e) => setTxidInput(e.target.value)}
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
    </main>
  );
}
