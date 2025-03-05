import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: "Fitness Tracker",
      image: "/images/fitness-tracker.png", // Add actual image paths
      deployed: "https://your-deployed-link.com",
      repo: "https://github.com/heliamosa/fitness-tracker",
    },
    {
      title: "Meal Logger",
      image: "/images/meal-logger.png",
      deployed: "https://your-deployed-link.com",
      repo: "https://github.com/heliamosa/meal-logger",
    },
    {
      title: "Workout Planner",
      image: "/images/workout-planner.png",
      deployed: "https://your-deployed-link.com",
      repo: "https://github.com/heliamosa/workout-planner",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
