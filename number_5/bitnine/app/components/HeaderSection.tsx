import React from "react";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="py-16 h-full flex flex-col items-center justify-center">
      <Image
        src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"
        alt="Flowbite Logo"
        className="mb-3"
        width={300}
        height={400}
      />
      <div className="flex flex-col items-center px-6 sm:px-0 sm:w-2/3 md:w-1/2 gap-3 mb-6">
        <span className="font-bold">
          An integration of Bitnine’s DB technology and PG expertise
        </span>
        <p className="text-center">
          AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
          of expertise and knowledge accumulated through database research and
          development.
        </p>
        <p className="text-center">
          The enterprise package, along with AgensSQL engine, is an all-in-one
          solution that ensures the efficiency and scalability of data
          management.
        </p>
        <p className="text-center">
          Get AgensSQL now for stable operation and management services at a
          reduced maintenance cost.
        </p>
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          contact
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          brochure
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          blog
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
