import React from "react";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address:", address)
  
  if (!address) {
  return (
    <div className="landing">
      <h1>Welcome to CandyDAO</h1>
      <button onClick={() => connectWallet("injected")} classname="btn">
        Connect your wallet
      </button>
    </div>
  );
 }

  return (
    <div className="landing">
      <h1>wallet connected!</h1>
    </div>);
};

export default App;
