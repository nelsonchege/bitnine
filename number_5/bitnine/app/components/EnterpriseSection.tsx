import React from "react";
import Image from "next/image";

const EnterpriseSection = () => {
  return (
    <div className="h-full bg-slate-100 flex items-center justify-center">
      <Image
        src="https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png"
        alt="Flowbite Logo"
        className="p-6 mb-3"
        width={500}
        height={500}
        sizes="(min-width: 500px) 50%"
      />
    </div>
  );
};

export default EnterpriseSection;
