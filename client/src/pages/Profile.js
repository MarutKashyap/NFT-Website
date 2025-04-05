import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNFTContext } from "../context/NFTContext"; // ⬅️ import NFT context
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Profile() {
  const { user } = useContext(UserContext);
  const { purchasedNFTs } = useNFTContext(); // ⬅️ get purchased NFTs

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed");
    }
  };

  if (!user) {
    return <p>You must be logged in to view your profile.</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>User Profile</h2>
      <img
        src={user.photoURL}
        alt="Profile"
        width="100"
        style={{ borderRadius: "50%", marginBottom: "1rem" }}
      />
      <p>
        <strong>Name:</strong> {user.displayName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button
        onClick={handleLogout}
        style={{ marginTop: "1rem", padding: "8px 16px", cursor: "pointer" }}
      >
        Logout
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h3>Your NFTs</h3>
        {purchasedNFTs.length === 0 ? (
          <p>You haven’t purchased any NFTs yet.</p>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {purchasedNFTs.map((nft, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "180px",
                  textAlign: "center",
                }}
              >
                <img
                  src={nft.image}
                  alt={nft.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h4>{nft.name}</h4>
                <p style={{ color: "#4F46E5", fontWeight: "bold" }}>
                  {nft.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
