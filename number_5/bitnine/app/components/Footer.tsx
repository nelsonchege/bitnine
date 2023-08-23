import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-full w-full bg-slate-900 text-white p-4">
      <div className="sm:my-10 sm:justify-evenly hidden sm:flex">
        <div
          className="flex flex-col
        "
        >
          <h2>PRODUCTS</h2>
          <span className="cursor-pointer hover:text-sky-600">
            Relational Database
          </span>
          <span className="cursor-pointer hover:text-sky-600">
            Graph Database
          </span>
          <span className="cursor-pointer hover:text-sky-600">
            Graph-based Solution
          </span>
        </div>
        <h2> USE CASES</h2>
        <h2>SERVICES</h2>
        <div
          className="flex flex-col
        "
        >
          <h2>RESOURCES</h2>
          <span className="cursor-pointer hover:text-sky-600">
            Documentation
          </span>
          <span className="cursor-pointer hover:text-sky-600"> Learn</span>
        </div>
        <h2> BLOG</h2>
        <div
          className="flex flex-col
        "
        >
          <h2>COMPANY</h2>
          <span className="cursor-pointer hover:text-sky-600">About Us</span>
          <span className="cursor-pointer hover:text-sky-600"> Contact</span>
        </div>
      </div>
      <div className="flex justify-between">
        <p>@ 2023 by Bitnine Global Inc. All Rights Reserved.</p>
        <div className="hidden sm:block">socials</div>
      </div>
    </div>
  );
};

export default Footer;
