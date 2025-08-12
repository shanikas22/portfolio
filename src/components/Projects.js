import React from "react";

const projects = [
  {
    title:"Hospital Blood Bank Management System",
    period:"Sep 2024 – Dec 2024",
    desc:"Web app to streamline blood requests between hospitals and receivers. Frontend: HTML/CSS/Bootstrap/JS. Backend: PHP & MySQL.",
    tags:["PHP","MySQL","Bootstrap","JavaScript"]
  },
  {
    title:"Zen-Fit — Health Tracker App",
    period:"Jan 2025 – Apr 2025",
    desc:"MERN stack application for registration, health tracking, location & food management, JWT authentication, interactive visualizations.",
    tags:["MongoDB","Express","React","Node","JWT"]
  }
];

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <div className="card fade-up">
        <h2>Projects</h2>
        <div className="project-grid" style={{marginTop:12}}>
          {projects.map((p, idx)=>(
            <article className="project" key={idx}>
              <h4>{p.title}</h4>
              <div className="meta">{p.period}</div>
              <p style={{marginTop:8}}>{p.desc}</p>
              <div className="tags" style={{marginTop:12}}>
                {p.tags.map((t,i)=>(<span key={i} className="chip" style={{fontSize:12}}>{t}</span>))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
