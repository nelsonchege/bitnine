import React from "react";
import Image from "next/image";

const EnterprisePackageSection = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="font-bold mt-10 mb-3">Agens Enterprise Package</h1>
      <p className="sm:w-1/2 text-center">
        Agens Enterprise Package comes with a high availability management
        server that supports backup and data monitoring dashboard that helps
        enterprise customers manage their data efficiently.
      </p>
      <div className=" flex flex-col sm:flex-row">
        <div className="mt-5 p-2 sm:w-1/2 flex flex-col items-center">
          <h2 className="font-bold">Agens HA Manager</h2>
          <span>HA Clustering – Failover/Failback, Load-balancing</span>
          <Image
            src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
            alt="Flowbite Logo"
            className="p-6 mb-3"
            width={800}
            height={10}
          />
        </div>
        <div className="mt-5 sm:w-1/2 flex flex-col items-center">
          <h2 className="font-bold">Agens Enterprise Manager</h2>
          <div className="my-2 p-5 border rounded-md w-2/3 border-sky-600 text-center text-sky-600 ">
            Backup/Restore
          </div>
          <div className="my-1 p-5 border rounded-md w-2/3 border-sky-600 text-center text-sky-600 ">
            DB Monitoring Dashboard
          </div>
          <div className="my-1 p-5 border rounded-md w-2/3 border-sky-600 text-center text-sky-600 ">
            Schedule Management
          </div>
          <div className="my-1 p-5 border rounded-md w-2/3 border-sky-600 text-center text-sky-600 ">
            Database Audit
          </div>
          <div className="my-1 p-5 border rounded-md w-2/3 border-sky-600 text-center text-sky-600 ">
            SQL Monitoring
          </div>
          <div className="my-1 p-5 border rounded-md w-2/3 border-sky-600 text-sky-600 text-center">
            Performance Management
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePackageSection;
