import React, { useEffect,useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import {  toast } from 'react-toastify';
import { LiaHorseHeadSolid } from "react-icons/lia";


const Action = () => {

const [favorites, setFavorites] = useState([]);
const handleClickProcess=(item)=>{
    if(!favorites.find(fav => fav.title === item.title)){
        setFavorites([...favorites, item]);
        toast('Item Added to your Favoiete Lists');

    }
}

const handleRemoveFavorite=(itemTitle)=>{
    setFavorites(favorites.filter(fav => fav.title !== itemTitle));
    toast.warn("Item Removed From Favorites!")
}


const [items, setItems] =useState([]);
    useEffect(() => {
       fetch('fakeData.json')
       .then(res=>res.json())
       .then(data=>setItems(data));
    })

    return (
        <div className='bg-[#EBF0F5] p-24'>
            <h1 className='text-[#0E2954] font-bold text-2xl py-5'>Active Auctions</h1>
            <p className='text-[#000000] pb-5'>Discover and bid on extraordinary items</p>

            <div className="table-containers flex justify-between gap-6">
               
                <div className="left-table w-[70%]">
                    <div className="overflow-x-auto p-6 bg-white">
  <table className="w-full border-collapse rounded-lg">
    {/* Table Header */}
    <thead>
      <tr className="border-b border-gray-100 text-black text-sm">
        <th className="text-left py-3">Items</th>
        <th className="text-left py-3">Current Bid</th>
        <th className="text-left py-3">Time Left</th>
        <th className="text-center py-3">Bid Now</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="text-sm text-gray-800">
      
     {
        items.map((item, idx)=>(
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
        <td className="py-4 flex items-center gap-4">
          <img src={item.image} 
               className="w-14 h-14 object-cover rounded-md" alt={item.title} />
          <span className="font-medium text-[#003EA4]">
            {item.title}
          </span>
        </td>
        <td className="py-4 font-semibold"> {"$"+item.currentBidPrice}</td>
        <td className="py-4 text-blue-600">{item.timeLeft}</td>
        <td className="py-4 text-center text-xl ">
          <button className={favorites.find(fav => fav.title === item.title)? 'cursor-not-allowed':'cursor-pointer'} onClick={() => handleClickProcess(item)}>{favorites.find(fav => fav.title === item.title) ? <FaHeart className="text-red-500" /> : <CiHeart />}</button>
        </td>
      </tr>
        ))
     }
      

    </tbody>
  </table>
</div>

                </div>

                <div className="right-table w-[30%] pl-6">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-6 justify-center border-b border-gray-100">
                            <FaHeart className="text-gray-400 text-lg" />
                            <h2 className="text-[#0E2954] font-semibold text-2xl">Favorite Items</h2>
                        </div>
                       
                       {
                        favorites.length> 0 ?<div className="space-y-4">
  {favorites.map((item, idx) => (
    <div key={idx} className="flex items-center justify-between border-b border-gray-200 py-4">
  
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />

    
        <div>
          <h3 className="text-sm font-semibold text-gray-900 leading-snug max-w-[260px]">
            {item.title}
          </h3>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
            <span className="font-medium text-gray-900">{"$" + item.currentBidPrice}</span>
            <span>Bids: {item.bitCount || 0}</span>
          </div>
        </div>
      </div>


      <button className="text-gray-400 hover:text-gray-600 text-lg font-medium" onClick={() => handleRemoveFavorite(item.title)}>
        ✕
      </button>
    </div>
  ))}
</div>
 :<div className="text-center mb-6 pb-6">
                            <p className="text-black font-semibold  text-base mb-2">No favorites yet</p>
                            <p className="text-gray-500 text-sm">Click the heart icon on any item to add it to your favorites</p>
                        </div>                        
                       }
                       
                        
                        <hr className="mb-6" />
                        
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-semibold text-sm ">Total bids Amount</span>
                            <span className="text-black font-bold text-lg">${favorites.reduce((sum, item) => sum + item.currentBidPrice, 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Action;