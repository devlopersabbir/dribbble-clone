import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="LOGO" priority />
        </Link>
        <ul className="xl:flex hidden text-small gap-7"></ul>
      </div>
    </div>
  );
};

export default Navbar;
