import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, Col, Row } from "reactstrap";
export default function CoinDetail() {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
      setCoin(res.data);
      console.log(res.data);
    });
  }, [id]);
  console.log(coin);

  return (
    <div style={{ marginTop: "50px" }}>
      {coin ? (
        <div>
          {" "}
          <Row>
            <Col xs="9">
              <div>
                <div>
                  <Badge> Rank #{coin.market_cap_rank}</Badge>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <h4>
                      <span>
                        <img src={coin.image.thumb} alt="#" />
                      </span>
                      {coin.name}
                    </h4>
                    <h4> {coin.symbol.toUpperCase()} </h4>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <h1>
                      $
                      {coin.market_data.current_price.usd
                        ? coin.market_data.current_price.usd
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        : ""}
                    </h1>

                    <h3
                      style={{
                        color:
                          coin.market_data
                            .price_change_percentage_1h_in_currency.usd > 0
                            ? "green"
                            : "red",
                      }}
                    >
                      %
                      <span>
                        {coin.market_data.price_change_percentage_1h_in_currency.usd?coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                          1
                        ):'0'}
                      </span>
                    </h3>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px",
                      }}
                    >
                      <small>Market Cap </small>{" "}
                      <h6>
                        $
                        {coin.market_data.market_cap.usd
                        ? coin.market_data.market_cap.usd
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        : ""}
                         
                      </h6>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <small>24-hour trading volume</small>{" "}
                      <h6>
                        $
                        {coin.market_data.total_volume.usd
                        ? coin.market_data.total_volume.usd
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        : ""}
                      </h6>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <small>Fully Diluted Valuation</small>{" "}
                      <h6>
                        $
                        {coin.market_data.fully_diluted_valuation["usd"]
                          ? coin.market_data.fully_diluted_valuation["usd"]
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                          : "0"}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <small>Circulating Supply </small>{" "}
                      <h6>
                        $
                        {coin.market_data.circulating_supply ?coin.market_data.circulating_supply
                            .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "."):'0'}
                      </h6>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px",
                      }}
                    >
                      <small>Total Supply</small>{" "}
                      <h6>
                        $
                        {coin.market_data.total_supply?coin.market_data.total_supply
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "."):'0'}
                      </h6>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <small>Maximum Supply</small>{" "}
                      <h6>
                        $
                        {coin.market_data.max_supply
                          ? coin.market_data.max_supply
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                          : "0"}
                      </h6>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </Col>
            <Col xs="3">
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Web Site:
                </p>
                <Button
                  color="light"
                  style={{
                    color: "grey",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
                  <a
                    href={coin.links.homepage[0]}
                    style={{ textDecoration: "none", color: "grey" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {coin.name}
                  </a>
                </Button>
              </div>
              <div style={{ display: "flex" }}>
                <p>Browser:</p>
                <Badge
                  color="light"
                  style={{ display: "flex", flexWrap: "wrap", color: "grey" }}
                >
                  {coin.links.blockchain_site.map((item) => (
                    <a href={item} target="_blank" rel="noreferrer">
                      <Button
                        color="light"
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        {item.slice(8, 15)}
                      </Button>
                    </a>
                  ))}
                </Badge>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <p>Communities</p>
                <Badge>{coin.links.official_forum_url}</Badge>
                <Badge>{coin.links.subreddit_url}</Badge>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
