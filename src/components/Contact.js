import React, { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({name:"",email:"",message:""});

  function update(e){
    setForm({...form,[e.target.name]:e.target.value});
  }

  function submit(e){
    e.preventDefault();
    // Simple client-side behaviour: open mail client with filled values
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:shanikasivakumar@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section container">
      <div className="card fade-up">
        <h2>Contact</h2>
        <p className="meta">Feel free to reach out — I respond to professional inquiries and internship offers.</p>

        <form onSubmit={submit} style={{marginTop:14,display:"grid",gap:12}}>
          <div className="form-row">
            <div className="field">
              <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
            </div>
            <div className="field">
              <input name="email" placeholder="Your email" value={form.email} onChange={update} required />
            </div>
          </div>

          <textarea name="message" placeholder="Message" value={form.message} onChange={update} required></textarea>

          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <button className="btn" type="submit">Send (via email)</button>
            <a className="btn" style={{background:"#0b8bd6"}} href="https://github.com/shanikas22" target="_blank" rel="noreferrer">View GitHub</a>
            <a className="meta" href="mailto:shanikasivakumar@gmail.com">Or email directly</a>
          </div>
        </form>
      </div>
    </section>
  );
}
