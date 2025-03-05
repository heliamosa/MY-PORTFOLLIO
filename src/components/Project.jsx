function Project({ title, image, deployed, repo }) {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;
  