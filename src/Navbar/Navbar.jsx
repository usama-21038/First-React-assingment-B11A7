import React from 'react';

const Navbar = () => {
    return (
        <div>
  <div className="flex justify-between items-center justify-around bg-white p-3 px-16 ">
        <div className="flex justify-between">
    <h1 className=" text-2xl font-bold gap-0"><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></h1>
  </div>
  <div className="links-container">
    <ul className='flex gap-10 text-black font-medium'>
        <li><a href="">Home</a></li>
        <li><a href="">Auctions</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">How to works</a></li>
    </ul>
  </div>
  <div className="img-container flex gap-3">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
       <img src="https://i.ibb.co.com/jvLzTtZ7/Group-3466092.png" alt="tailwind css nab notification" />
        </div>
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/Zz32WW8c/Ellipse-19.png" />
        </div>
  </div>
  </div>
</div>




    );
};

export default Navbar;