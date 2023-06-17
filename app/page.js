'use client'

import { useState, useEffect } from "react"
import Coins from './components/Coins'
import SearchCoins from './components/SearchCoins'

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coins');
      const coins = await response.json();
      setCoins(coins.data.coins);
    }

    getCoins();
  }, []);


  return (
   <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">Crypto Coins</h1>
      <SearchCoins getSearchResults={(results) => setCoins(results)} />
      <Coins coins={coins} />
   </div>
  )
}
