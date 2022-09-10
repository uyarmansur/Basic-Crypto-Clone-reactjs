import React from "react";
import { useContext } from "react";
import { CoinContext } from "./CoinContext";
import { Link } from "react-router-dom";

export default function SearchedCoin() {
  const { searchedCoin } = useContext(CoinContext);
  // const handleClick=()=>{
  //   let newArr=[...crypto]
  //    newArr=crypto.filter((item)=>searchedCoin.find((wItem)=>wItem.id===item.id))
  //   setCrypto([...newArr])
  //   console.log(newArr)
  //   ,crypto,setCrypto
  // }
  const divStyle={
    overflowX: 'scroll',
    height:'300px'
  };
  return (
    <div style={divStyle}>
      {searchedCoin.map((item) => (
        <div style={{marginTop:'5px',marginRight:'5px'}}>
          <Link to={`coindetail/${item.id}`} style={{textDecoration:'none',color:'black',paddingLeft:'5px'}}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
