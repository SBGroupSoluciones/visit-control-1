import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { GetAccount } from "src/views/Auth/Account";

import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Auth.configure(awsconfig);

const TheLayout = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const account = await GetAccount(localStorage.getItem("account"));
      console.log("accs ", localStorage.getItem("account"));
      console.log("sadads ", account);
      setUserData(account);
    };
    if(!userData){
    fetchData();
    }
    console.log();
  }, [userData]);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader userData={userData} />
        <div className="c-body">
          <TheContent />
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  );
};

export default TheLayout;
