import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";


export default function Footer() {
  return (
    <div style={{ backgroundColor: "grey", marginTop: "40px", height: "100%" }}>
 
      <footer
        style={{
          backgroundColor: "yellowgreen",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Nav
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "black",
          }}
        >
          <NavItem>
            <NavLink href="/">
              <img
                src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
                alt="#"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kripto Para Birimleri</NavLink>
            <NavLink href="#">Borsalar</NavLink>
            <NavLink href="#">NFT</NavLink>
            <NavLink href="#">Kripto Öğrenin</NavLink>
            <NavLink href="#">Ürünler</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/mansur-uyar-896a291b8/"
              target={"_blank"}
            >
              LinkedIn
            </NavLink>
            <NavLink href="https://github.com/uyarmansur" target={"_blank"}>
              Github
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </footer>
      <div style={{ padding: "10px", color: "#fff" }}>
        © 2022 CoinGecko. All Rights Reserved.
      </div>
    </div>
  );
}
