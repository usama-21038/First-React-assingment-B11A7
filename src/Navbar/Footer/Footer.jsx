import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center p-24 bg-white'>
               <h1 className=" text-2xl font-bold gap-0 pb-1"><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></h1>
               <ul className='flex gap-3 font-semibold pb-2'>
        <li className='text-black'>Bid.</li>
        <li className='text-black'>Win.</li>
        <li className='text-black'>Own.</li>
               </ul>
               <ul className='flex gap-4 text-sm font-semibold pb-2'>
        <li className='text-black'>Home</li>
        <li className='text-black'>Auctions</li>
        <li className='text-black'>Categories</li>
        <li className='text-black'>How to works</li>
               </ul>
               <p className='text-black'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;