import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { CoinContext } from "./CoinContext";
// import SearchedCoin from "./SearchedCoin";
export default function Main() {
  const [page, setPage] = useState(1);
  const { wallet, setWallet,  crypto, setCrypto, globalInfo } =
    useContext(CoinContext);
  const totalPageCount = Math.ceil(globalInfo?.active_cryptocurrencies / 100);
  const handleClick = (item) => {
    let existedArr = [...wallet];

    if (!existedArr.find((element) => element.id === item.id)) {
      existedArr.push(item);
    } else {
      existedArr = existedArr.filter((wItem) => wItem.id !== item.id);
    }
    setWallet([...existedArr]);
    localStorage.setItem("coin", JSON.stringify(existedArr));
  };
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      )
      .then((res) => {
        setCrypto(res.data);
      });
  }, [page, setCrypto]);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Coin</th>
            <th>Fiyat</th>
            <th>1s</th>
            <th>24s</th>
            <th>7g</th>
            <th>24 Saatlik Hacim</th>
            <th>Piyasa Değeri</th>
            
          </tr>
        </thead>
        <tbody>
          {
            crypto.map((item) => {
              const sevenDays = item.ath_change_percentage;
              return (
                <tr
                  className="parent-element"
                  onClick={() => console.log(item.id)}
                >
                  <td>
                    {item.market_cap_rank}
                    <FontAwesomeIcon
                      icon={faStar}
                      onClick={() => handleClick(item)}
                      style={{
                        marginLeft: "4px",
                        cursor: "pointer",
                        fontSize: "1em",
                        color: wallet.find((element) => element.id === item.id)
                          ? "yellow"
                          : "black",
                      }}
                    />
                  </td>
                  <td
                    style={{ backgroundColor: "	#f8f8ff", borderRadius: "16px" }}
                  >
                    <Link
                      to={`coindetail/${item.id}`}
                      style={{ textDecoration: "none", color: "black" ,display:'flex',justifyContent:'flex-start',alignItems:'center'}}
                    >
                      {" "}
                      <span>
                        <img
                          src={item.image}
                          alt="#"
                          style={{ width: "30px", marginRight: "5px" }}
                        />
                      </span>
                      <span style={{ marginRight: "10px" }}>{item.name}</span>
                      <span style={{fontWeight:'bold'}}>{item.symbol.toUpperCase()}</span>
                    </Link>
                  </td>

                  <td>
                  $
                  {item.current_price
                      ? item.current_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      : '0'}
                    
                  </td>
                  <td>@mdo</td>
                  <td>%{item.market_cap_change_percentage_24h?.toFixed(1)}</td>
                  <td>%{sevenDays?.toFixed(1)}</td>
                  <td>
                    $
                    {item.total_volume
                      ? item.total_volume
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      : '0'}
                  </td>
                  <td>
                    $
                    {item.market_cap
                      ? item.market_cap
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      : '0'}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
      {/* searchedCoin.length > 0 ? (
            <SearchedCoin />
          ) : ( */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <Button
          onClick={() => {
            setPage(1)
          }}
        >
          First Page
        </Button>
        <Button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous Page
        </Button>
        <Button disabled>Page : {page} </Button>
        <Button
          onClick={() => {
            if (page < totalPageCount) {
              setPage(page + 1);
            }
          }}
        >
          Next Page
        </Button>

        <Button onClick={() => setPage(totalPageCount)}>LastPage</Button>
      </div>
    </div>
  );
}
