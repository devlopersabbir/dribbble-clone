import { footerLinks } from "@/constants";
import { IFooterLinks } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col ">
          <Image
            src="/logo-purple.svg"
            height={38}
            width={115}
            alt="purple logo"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ex.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link: IFooterLinks, index: number) => (
            <FooterColumn title={link.title} links={link.links} key={index} />
          ))}

          {/* <>
            <FooterColumn title="title" links={["1", "2", "3"]} />
            <div className="flex flex-1 flex-col gap-4">
              <FooterColumn title="title" links={["1", "2", "3"]} />
              <FooterColumn title="title" links={["1", "2", "3"]} />
            </div>
            <FooterColumn title="title" links={["1", "2", "3"]} />
          </> */}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@2023 dribbble clone. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,324</span> Project
          submited
        </p>
      </div>
    </footer>
  );
};

export default Footer;

interface IFooterColumnProps {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: IFooterColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className=" flex flex-col gap-2 font-normal">
        {links.map((item: string, i: number) => (
          <Link href="/" key={i}>
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
};
