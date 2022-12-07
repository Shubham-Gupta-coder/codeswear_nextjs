import React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
   const ref = useRef("");
   const toggleCart = () => {
     if (ref.current.classList.contains('translate-x-full')) {
        ref.current.classList.remove('translate-x-full');
        ref.current.classList.add('translate-x-0')}
    else{
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }};
  return (
    <div className="flex flex-col items-center  min-[500px]:flex-row shadow-[20px_0_20px_0_#00000088]">
      <div className="logo mx-5">
        <Image src="/logo.webp" width={200} height={40} />
      </div>
      <div className="nav">
        <ul className="flex items-center">
          <Link href={"/tshirt"} className="mx-1 font-extrabold">
            Tshirts
          </Link>
          <Link href={"/hoodies"} className="mx-1 font-extrabold">
            Hoodies
          </Link>
          <Link href={"/stickers"} className="mx-1 font-extrabold">
            Stickers
          </Link>
          <Link href={"/mugs"} className="mx-1 font-extrabold">
            Mugs
          </Link>
        </ul>
      </div>
      <div
        className="cart absolute right-2 top-2"
         onClick={toggleCart}
      >
        <FaShoppingCart />
      </div>
       <div
        ref={ref}
        className="sideBar absolute top-0 right-0 w-80 transform bg-pink-100 p-10 transition-transform translate-x-full"
      >
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-pink-500 cursor-pointer text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-deciaml">
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">1. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">2. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">3. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">4. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">5. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">6. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">7. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
          <li className="flex my-3 justify-around">
          <div className="w-2/3 font-bold">8. T-Shirt - Wear The Code</div>
          <div className="w-1/3 font-extrabold flex item-center text-lg justify-center"><AiFillPlusCircle className="cursor-pointer text-pink-500"/><span className="mx-2">1</span><AiFillMinusCircle className="cursor-pointer text-pink-500"/></div>
          </li>
        </ol>
        <div className="flex mt-5">
        <button className="flex mx-auto text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-md border-0 text-lg focus:outline-none items-center">
          <BsFillBagCheckFill/>
          Checkout</button>
        <button className="flex mx-auto text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-md border-0 text-lg focus:outline-none items-center">Clear Cart</button></div>
      </div> 
    </div>
  );
};

export default Navbar;
