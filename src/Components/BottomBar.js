import React from "react";
import { SocialIcon } from "react-social-icons";

function BottomBar() {
  return (
    <div className="bg-blue-900 p-12 w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <SocialIcon
          url=""
          network="facebook"
          bgColor="#ffffff"
          style={{ width: 28, height: 28 }}
        />
        <SocialIcon
          url=""
          network="twitter"
          bgColor="#ffffff"
          style={{ width: 28, height: 28 }}
        />
        <SocialIcon
          url=""
          network="youtube"
          bgColor="#ffffff"
          style={{ width: 28, height: 28 }}
        />
        <SocialIcon
          url=""
          network="instagram"
          bgColor="#ffffff"
          style={{ width: 28, height: 28 }}
        />
      </div>
      <h1 className="text-white text-center w-full text-sm">
        Copyright Mechanical Engineering, Indian Institute of Technology
        Gandhinagar
      </h1>
    </div>
  );
}

export default BottomBar;
