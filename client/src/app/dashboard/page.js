import Dashboard from "@/components/shared/layouts/Dashboard";
import React from "react";

const ControlPanel = () => {
  return (
    <Dashboard>
      <div className="w-full h-full flex justify-center items-center !rounded">
        <iframe
          title="Portfolio"
          src="https://my-portfolio-talibs-projects-20e9aed6.vercel.app/"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          frameBorder="0"
          scrolling="auto"
        ></iframe>
      </div>
    </Dashboard>
  );
};

export default ControlPanel;
