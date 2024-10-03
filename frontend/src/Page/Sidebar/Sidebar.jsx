import { Avatar } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            sx={{ width: "8rem", height: "8rem" }}
            className="border-2 border-[#c24dd0]"
            src="https://img.freepik.com/premium-vector/vd-letter-initial-logo-design-template-vector-illustration_1139332-481.jpg?semt=ais_hybrid"
            alt="company_logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
