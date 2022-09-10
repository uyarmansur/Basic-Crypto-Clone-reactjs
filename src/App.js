import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import { CoinContext } from "./components/CoinContext";
import CoinDetail from "./components/CoinDetail";
import Main from "./components/Main";
import Navi from "./components/Navi";
import Favorites from "./components/Favorites";
import SearchedCoin from "./components/SearchedCoin";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  const [globalInfo, setGlobalInfo] = useState();
  const [wallet, setWallet] = useState(!localStorage.getItem('coin') ? []:JSON.parse(localStorage.getItem('coin')));
  const [searchedCoin, setSearchedCoin] = useState([]);
  const [crypto, setCrypto]=useState([])
  const values = { setWallet,setGlobalInfo,setSearchedCoin,setCrypto, globalInfo ,wallet,searchedCoin,crypto};
  return (
    <div className="App" style={{height:'100%'}}>
      <CoinContext.Provider value={values}>
        
          <Container>
            <Navi></Navi>

            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/coindetail/:id" element={<CoinDetail />}></Route>
              <Route path="/favorites" element={<Favorites/>}></Route>
              <Route path="/searchedCoin/:coin" element={<SearchedCoin/>}></Route>
            </Routes>
          </Container>
        
      </CoinContext.Provider>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
