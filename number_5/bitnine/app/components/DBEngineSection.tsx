import React from "react";
import Image from "next/image";

const DBEngineSection = () => {
  return (
    <div className="h-full bg-slate-100 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-1/2 sm:w-1/4 gap-3 mt-5">
        <h1 className="font-bold text-2xl">AgensSQL DB Engine</h1>
        <span className="underline">Enhanced Data Security</span>
        <p className="text-center">
          AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security
          and stability.
        </p>
      </div>
      <div className="flex mt-4 gap-3 w-2/3 items-center justify-center flex-wrap mb-9">
        <div className="p-3 border border-b-slate-900 shadow-md bg-white">
          <Image
            src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
            alt="Flowbite Logo"
            className="p-6 mb-3"
            width={200}
            height={10}
          />
        </div>
        <div className="p-3 border border-b-slate-900 shadow-md bg-white ">
          <Image
            src="https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png"
            alt="Flowbite Logo"
            className="p-6 mb-3"
            width={200}
            height={10}
          />
        </div>
        <div className="p-3 border border-b-slate-900 shadow-md bg-white">
          <Image
            src="https://bitnine.net/wp-content/uploads/2022/04/Auditing.png"
            alt="Flowbite Logo"
            className="p-6 mb-3"
            width={200}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default DBEngineSection;
