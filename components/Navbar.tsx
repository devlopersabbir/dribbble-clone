import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AuthProvider } from ".";

const Navbar = () => {
  const session = false;
  return (
    <div className="flexBetween navbar">
      <div className="flexStart flex-1 gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="LOGO" priority />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks &&
            NavLinks.map((link, item) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            <p>userphoto</p>
            <Link href="/create-project">Share work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </div>
  );
};

export default Navbar;
