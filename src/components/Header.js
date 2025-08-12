import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <h1>Shanika S</h1>
          <div className="tagline">Aspiring Technology Consultant · Full-stack & Cloud</div>
        </div>

        <div className="contact-inline">
          <div>📞 +91 63798 27307</div>
          <div>📧 <a href="mailto:shanikasivakumar@gmail.com" style={{color:"inherit"}}>shanikasivakumar@gmail.com</a></div>
          <div style={{marginTop:10}}>
            <a className="contact-pill" href="https://github.com/shanikas22" target="_blank" rel="noreferrer">GitHub: shanikas22</a>
          </div>
        </div>
      </div>
    </header>
  );
}
