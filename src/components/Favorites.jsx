// import axios from "axios";
import React from "react";
import { Table } from "reactstrap";
// import { useEffect } from "react";
// import { useState } from "react";
import { useContext } from "react";
import { CoinContext } from "./CoinContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Favorites() {
  const { wallet ,setWallet} = useContext(CoinContext);
  const handleClick = (item) => {
    let existedArr = [...wallet];

    existedArr=(existedArr.filter((wItem) => wItem.id !== item.id))
    setWallet(existedArr)
    localStorage.setItem("coin", JSON.stringify(existedArr))
  };

  // useState her render işleminde state değerini koruyor.
  //useEffect fonksiyonu her render işleminden sonra tekrar çağırılır.
  //useRef render edilmeden değişken tutabilmek için kullanılır.
  // const [favorites, setFavorites] = useState([]);
  // const fetchData = async () => {
  //   let newArr = await Promise.all(
  //     wallet.map(async (item) => {
  //       const res = await fetch(
  //         `https://api.coingecko.com/api/v3/coins/${item}`
  //       );
  //       const data = await res.json();
  //       return data;
  //     })
  //   );

  //   setFavorites(newArr);
  // };

  // const fetch = () => {
  //   setFavorites([]);
  //   wallet.map((item) =>
  //     axios
  //       .get(`https://api.coingecko.com/api/v3/coins/${item}`)
  //       .then((r) => setFavorites((f) => [...f, r.data]))
  //   );
  // };
  // useEffect(() => {
  //   console.log(favorites);
  // }, [favorites]);
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
            <th>Son 7 Gün</th>
          </tr>
        </thead>
        <tbody>
          {wallet.map((item) => (
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faStar}
                  onClick={() => handleClick(item)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1em",
                    color: wallet.find((element) => element.id === item.id)
                      ? "yellow"
                      : "black",
                  }}
                />
              </td>
              <td style={{ backgroundColor: "	#f8f8ff", borderRadius: "16px" }}>
                <Link
                  to={`/coindetail/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
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
                  <span sty>{item.symbol.toUpperCase()}</span>
                </Link>
              </td>
              <td>
                {item.current_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                $
              </td>
              <td>@mdo</td>
              <td>%{item.market_cap_change_percentage_24h.toFixed(1)}</td>
              <td>%{item.ath_change_percentage.toFixed(1)}</td>
              <td>
                $
                {item.total_volume
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </td>
              <td>
                $
                {item.market_cap
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
//
