import React from "react";

export default function Experience(){
  return (
    <section id="experience" className="section container">
      <div className="card fade-up">
        <h2>Internships & Experience</h2>

        <div style={{marginTop:10}}>
          <h4>Full-Stack Development Intern — WebGen Technologies</h4>
          <div className="meta">May 2023 – Jun 2023 • Coimbatore</div>
          <p>Built and maintained full-stack features; collaborated on timely delivery.</p>
        </div>

        <div style={{marginTop:12}}>
          <h4>Software Developer Intern — Prodigy Infotech</h4>
          <div className="meta">Feb 2025 – Mar 2025 • Bangalore</div>
          <p>Designed backend logic and APIs for scalable software components.</p>
        </div>

        <div style={{marginTop:12}}>
          <h4>Cloud Computing Intern — Corizo (in partnership with Wipro)</h4>
          <div className="meta">Dates Not Provided</div>
          <p>Explored cloud deployment strategies and serverless concepts.</p>
        </div>

        <div style={{marginTop:12}}>
          <h4>Leadership & Activities</h4>
          <ul>
            <li>Organized SNS Colors event — planning, coordination, execution.</li>
            <li>Master of Ceremonies for college events — public speaking & engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
