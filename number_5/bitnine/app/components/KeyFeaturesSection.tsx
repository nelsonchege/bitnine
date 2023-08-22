import React from "react";
import Image from "next/image";

const KeyFeaturesSection = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h1 className="my-5 font-bold text-2xl">Key features</h1>
      <span>Manage your data with Agens Enterprise Package</span>
      <span>
        Essential enterprise features such as high availability and sharding are
        provided
      </span>
      <Image
        src="https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png"
        alt="Flowbite Logo"
        className="p-6 mb-3"
        width={1000}
        height={1000}
        sizes="(min-width: 500px) 70%"
      />
    </div>
  );
};

export default KeyFeaturesSection;
