import Image from "next/image";


export default function Coins({coins}) {

  return (
    <>
     <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
         {coins.map(coin => (
                <li key={coin.uuid} className="flex flex-col">
                    <Image
            src={coin.iconUrl}
            alt={coin.name}
            width={70}
            height={70}
            priority
          />
                    <h3>{coin.name}</h3>
                    <p>{coin.symbol}</p>
                    <p>{coin.price}</p>
                </li>
            ))}
     </ul>
    </>
  )
}
