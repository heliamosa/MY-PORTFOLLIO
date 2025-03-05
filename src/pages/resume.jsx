function Resume() {
    return (
      <section className="resume">
        <h2>My Resume</h2>
        <p>Download my resume below or check out my skills!</p>
  
        {/* Download Resume Button */}
        <a href="/Helia-Mosayebian-Resume.pdf" download className="resume-download">
          📄 Download Resume
        </a>
  
        {/* Technical Skills */}
        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL & Sequelize</li>
          <li>API Integration</li>
          <li>Git & GitHub</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Web Design</li>
        </ul>
  
        {/* Certifications & Education */}
        <h3>Certifications & Education</h3>
        <ul className="certifications-list">
          <li>📜 Software Development License (In Progress) – SMU</li>
          <li>🎓 Associate Degree in Business Management – Collin College</li>
          <li>🏡 Texas Real Estate License</li>
          <li>💊 Pharmaceutical Trainee License – Texas</li>
        </ul>
      </section>
    );
  }
  
  export default Resume;
  