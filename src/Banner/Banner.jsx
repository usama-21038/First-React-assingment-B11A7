import React from 'react';

const Banner = () => {
    return (
        <div>
<div className="h-screen w-full bg-[url('https://i.ibb.co.com/KpbYhpc7/Banner-min.jpg')] bg-cover bg-center flex items-center">
 <div className='pl-24 max-w-[40%]'>
     <h1 className="text-white text-5xl font-bold mb-4">Bid on Unique Items from Around the World</h1>
  <p className="text-gray-300 text-lg mb-8">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
  <button className="bg-white text-black px-6 py-3 rounded-3xl font-semibold hover:bg-gray-200">Explore Auctions</button>
 </div>
</div>

        </div>
    );
};

export default Banner;