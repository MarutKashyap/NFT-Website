import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Welcome to the NFT Marketplace
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Discover, collect, and sell extraordinary NFTs.
      </p>
      <Link to="/explore">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#4F46E5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Explore NFTs
        </button>
      </Link>
    </div>
  );
}

export default Home;
