import React, { useState } from "react";
import { useNFTContext } from "../context/NFTContext";

const dummyNFTs = [
    {
      id: 1,
      name: "Cyber Cat",
      image: "https://coin-images.coingecko.com/nft_contracts/images/4821/large/cyber-cat.png?1723501409",
      price: "0.08 ETH",
    },
    {
      id: 2,
      name: "Alien Punk",
      image: "https://i.seadn.io/gae/vTj5GLoOP-D1wVvEtakZ3CrvKEDNn6ILZEYDhqILzFrAPpqObYZ6f5Jav-cNmnVTVdbUpsVKEdXqPFVHslgqKyu4xjKxIGYG0W5mOQ?auto=format&dpr=1&w=3840",
      price: "1.2 ETH",
    },
    {
      id: 3,
      name: "Pixel Samurai",
      image: "https://pbs.twimg.com/profile_images/1434406930085150730/u_Dt4T4T_400x400.jpg",
      price: "0.45 ETH",
    },
    {
      id: 4,
      name: "Robo Gorilla",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxB36zb6djdJCC4oAwcA6tnb3vOXm_NR5uQ&s",
      price: "0.33 ETH",
    },
    {
      id: 5,
      name: "Mystic Fox",
      image: "https://i.seadn.io/gae/DxrnJGtNzYLGjVCHaEZDKn2aX8JeHCHyNB_4QjqXyDJ2RJlqtt0fAwQjemi03PLRragQtJFbxNkLXwsphmsC4bk5url3y5yo9ipE?auto=format&dpr=1&w=1000",
      price: "0.65 ETH",
    },
    {
      id: 6,
      name: "Space Ape",
      image: "https://i.seadn.io/gae/EvSxHDQHBgh05A3T4HMGGjPrFnBPb5TdDZakTcgrcVAv5asslTant7fY9JXqMmnIHe54fLmclSi6LpfGgiMDue3Magqg0NrF-Tuz?auto=format&dpr=1&w=1000",
      price: "0.92 ETH",
    },
    {
      id: 7,
      name: "Pixel Wizard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLmTX7W3xTyhezgsgjtvqgg4-IRjMeF5X3Q&s",
      price: "0.49 ETH",
    },
    {
      id: 8,
      name: "Neon Skull",
      image: "https://i.seadn.io/gae/7Le6Gr7MfvsrYbjUxegbUtUaLkYKx14jbFwvs7MIvHVuT2uGvmMIqUGu_zupBIV7s7IPYweTgysh4DZocjIW2BDpDx3CWUJqDrp8?auto=format&dpr=1&w=1000",
      price: "0.73 ETH",
    },
    {
      id: 9,
      name: "Cyber Samurai",
      image: "https://solanart.io/_next/image?url=https%3A%2F%2Fapi-v2.solanart.io%2Fcdn%2F500%2Fhttps%3A%2F%2Fwww.arweave.net%2F5ePkQsVZrb3Oq67Az4TKaoi0Dmmnpq3ZggXYFwSwhGs%3Fext%3Dpng&w=3840&q=75",
      price: "1.1 ETH",
    }
  ];
  
  

function Explore() {
const { setPurchasedNFTs, purchasedNFTs } = useNFTContext();
  const [cart, setCart] = useState([]);
  const [snackbar, setSnackbar] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleBuy = (nft) => {
    setCart([...cart, nft]);
    setSnackbar(`Added '${nft.name}' to your cart.`);
    setTimeout(() => setSnackbar(""), 3000);
  };

  const totalETH = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const handleCheckout = () => {
    setPurchasedNFTs([...purchasedNFTs, ...cart]);
    if (!walletAddress) {
      alert("Please enter a wallet address.");
      return;
    }
    const txId = "TX" + Math.floor(Math.random() * 100000000);
    setTransactionId(txId);
    setCart([]);
    setShowCheckout(false);
    setSnackbar(`Payment successful! Transaction ID: ${txId}`);
    setWalletAddress("");
    setTimeout(() => setSnackbar(""), 5000);
  };

  return (
    <div style={{ display: "flex", padding: "30px" }}>
      <div style={{ flex: 3 }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Explore NFTs</h2>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Browse and purchase unique digital assets.
        </p>

        {snackbar && (
          <div
            style={{
              backgroundColor: "#4F46E5",
              color: "white",
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            {snackbar}
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {dummyNFTs.map((nft) => (
            <div
              key={nft.id}
              style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={nft.image}
                alt={nft.name}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px"
                }}
                />

              <h3 style={{ marginTop: "15px" }}>{nft.name}</h3>
              <p style={{ color: "#4F46E5", fontWeight: "bold" }}>{nft.price}</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#4F46E5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => handleBuy(nft)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, marginLeft: "30px" }}>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: "bold" }}>Total: {totalETH.toFixed(2)} ETH</p>
            {!showCheckout ? (
              <button
                onClick={() => setShowCheckout(true)}
                style={{ marginTop: "10px", padding: "10px", width: "100%" }}
              >
                Proceed to Checkout
              </button>
            ) : (
              <div style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Enter Wallet Address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                />
                <button
                  onClick={handleCheckout}
                  style={{ padding: "10px", width: "100%" }}
                >
                  Pay Now
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Explore;
