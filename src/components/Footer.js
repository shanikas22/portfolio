import React from "react";

export default function Footer(){
  return (
    <footer className="card" style={{borderRadius:0}}>
      <div className="container center">
        © {new Date().getFullYear()} Shanika S • No.9, TVS Nagar, PNT Colony, Coimbatore • Email: <a href="mailto:shanikasivakumar@gmail.com">shanikasivakumar@gmail.com</a>
      </div>
    </footer>
  );
}
