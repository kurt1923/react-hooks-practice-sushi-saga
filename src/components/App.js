import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet from "./SushiWallet"

const API = "http://localhost:3001/sushis";
const displaySize = 4
const startMoney = 100

function App() {
  
  const [sushisArray, setSushisArray] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0)
  const [money, setMoney] = useState(startMoney)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushisArray) => {
        setSushisArray(sushisArray);
      });
  }, []);
 
  
 function nextSushis(){
    setSushiIndex((sushiIndex + displaySize)%sushisArray.length)
  }

  function handleEatenSushi(eatenSushi){
    if (eatenSushi.price <= money) {
    setSushisArray(sushisArray.map((s) => (eatenSushi.id === s.id ? {...s, eaten: true} : s)))
    setMoney(money - eatenSushi.price)
    }
  }

  function handleAddMoney(newMoney){
    setMoney(money + newMoney)
  }
  return (
    <div className="app">
      <SushiContainer 
      sushis={sushisArray.slice(sushiIndex, sushiIndex + displaySize)} 
      nextSushis={nextSushis}
      handleEatenSushi={handleEatenSushi} />
      <Table money={money} />
      <SushiWallet handleAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;
