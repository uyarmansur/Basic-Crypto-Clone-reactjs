import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { CoinContext } from "./CoinContext";
import SearchedCoin from "./SearchedCoin";

export default function Navi() {
  const [dropdownOpen, setDropdownToggle] = useState(false);
  const toggle = () => {
    setDropdownToggle((prevState) => !prevState);
  };
  const { globalInfo, setGlobalInfo,searchedCoin} = useContext(CoinContext);
  const {  setSearchedCoin } =
    useContext(CoinContext);
  // const { coin } = useParams();
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      setGlobalInfo(res.data.data);
    });
  }, [setGlobalInfo]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (coin) => {
    console.log(coin);

    if (coin === "") {
      setSearchedCoin([]);
    } else {
      axios
        .get(`https://api.coingecko.com/api/v3/search?query=${coin}`)
        .then((res) => setSearchedCoin(res.data.coins));
    }
  };

  const handleClick=()=>{
    console.log(searchedCoin)
  }
  return (
    <div>
      <Nav
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "black",
        }}
      >
        <span>Coin'ler:</span>
        <NavLink href="#">{globalInfo?.active_cryptocurrencies}</NavLink>
        <span>Borsalar:</span>
        <NavLink href="#">{globalInfo?.markets}</NavLink>
        <span>Piyasa Değeri:</span>
        <NavLink href="#">Another Link</NavLink>
        <span>24 saat Hacim:</span>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
        <span>Hakimiyet:</span>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
      <hr></hr>
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
        </NavItem>
        <NavItem>
          <NavLink href="#">Borsalar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">NFT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Kripto Öğrenin</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Ürünler</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p>
      <Nav>
        <NavLink href="/" style={{color:'black'}}> <h6>Main Page</h6> </NavLink> 
        
        <NavLink href="/favorites" style={{color:'black'}}>
          <h6>Favorites</h6>
        </NavLink>
        <NavItem>
          <Form style={{ display: "flex" }} onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Search Coin..."
              onChange={(event) => handleChange(event.target.value)}
            ></Input>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} onClick={handleClick}>
              <DropdownToggle
                tag="button"
                data-toggle="dropdown"
                className="btn btn-primary"
                aria-expanded={dropdownOpen}
              >
                Search
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{searchedCoin.length> 0 ? (<SearchedCoin></SearchedCoin>):('Nothing Searched!')}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Form>
        </NavItem>
        <NavItem></NavItem>
      </Nav>
    </div>
  );
}
