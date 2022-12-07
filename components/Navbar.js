import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
      <div className="cart absolute right-2 top-2">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
