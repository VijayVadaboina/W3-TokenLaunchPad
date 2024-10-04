import { createMint } from "@solana/spl-token";

export function TokenLaunchpad() {
  function createToken() {
    const name = document.getElementById("Name").value;
    const symbol = document.getElementById("Symbol").value;
    const imageUrl = document.getElementById("ImageUrl").value;
    const initialSupply = document.getElementById("InitialSupply").value;
  }
  return (
    <div className="topper">
      <h1>Solana Token Launchpad</h1>
      <input type="text" className="inputText" placeholder="Name" id="Name" />
      <br />
      <input
        type="text"
        className="inputText"
        placeholder="Symbol"
        id="Symbol"
      />
      <br />
      <input
        type="text"
        className="inputText"
        placeholder="ImageUrl"
        id="ImageUrl"
      />
      <br />
      <input
        type="text"
        className="inputText"
        placeholder="InitialSupply"
        id="InitialSupply"
      />
      <br />
      <button className="btn" onClick={createToken}>
        Create Token
      </button>
    </div>
  );
}
