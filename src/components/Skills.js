import React from "react";

const tech = ["Python","Java","JavaScript","React.js","Node.js","HTML","CSS","MySQL","MongoDB","Git","GitHub"];
const soft = ["Communication","Analytical Reasoning","Team Collaboration","Leadership","Problem-Solving","Time Management"];

export default function Skills(){
  return (
    <section id="skills" className="section container">
      <div className="grid">
        <div>
          <div className="card fade-up">
            <h2>Core Skills</h2>
            <h4>Technical</h4>
            <div className="chips" style={{marginBottom:12}}>
              {tech.map((t,i)=>(<div key={i} className="chip">{t}</div>))}
            </div>

            <h4>Soft Skills</h4>
            <div className="chips">
              {soft.map((s,i)=>(<div key={i} className="chip">{s}</div>))}
            </div>
          </div>

          <div className="card fade-up" style={{marginTop:12}}>
            <h2>Areas of Interest</h2>
            <ul>
              <li>Digital & Emerging Technologies</li>
              <li>AI & Data Fundamentals</li>
              <li>Cloud Computing & Serverless</li>
              <li>Cybersecurity Concepts</li>
              <li>Technology Strategy & Solution Delivery</li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="card fade-up">
            <h3>Education</h3>
            <p><strong>B.Tech (Information Technology)</strong><br/>SSN College of Engineering (2022–2026)<br/>CGPA: 7.63 (up to 5th sem)</p>

            <hr/>

            <p><strong>HSC</strong><br/>Stanes ICSE (2020–2021) — 95.6%</p>
            <p><strong>SSLC</strong><br/>Stanes ICSE (2019–2020) — 92.8%</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
