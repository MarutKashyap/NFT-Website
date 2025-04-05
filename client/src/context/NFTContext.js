import React, { createContext, useContext, useState } from "react";

const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);

  return (
    <NFTContext.Provider value={{ purchasedNFTs, setPurchasedNFTs }}>
      {children}
    </NFTContext.Provider>
  );
};

export const useNFTContext = () => useContext(NFTContext);
