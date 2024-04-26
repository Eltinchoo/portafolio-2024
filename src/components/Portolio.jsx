


import e_commerce from "../assets/img/e-commerce.png";
import rick_and_morty from "../assets/img/rick-and-morty.png";
import pokedex from "../assets/img/pokemon-pokedex.png";
import weatherapp from "../assets/img/weather-app.png";
import basicCalculator from "../assets/img/Basic-calculator.png";

const Portfolio = () => {
  const projectsData = [
    {
      title: "E-commerce",
      url: "https://stunning-vacherin-d5764e.netlify.app/",
      image: e_commerce,
      className: "e-commerce",
    },
    {
      title: "Pokedex",
      url: "https://sparkling-dieffenbachia-719213.netlify.app/",
      image: pokedex,
      className: "pokedex",
    },
    {
      title: "Weather-app",
      url: "https://martinparedes-weather-app.netlify.app/",
      image: weatherapp,
      className: "weatherapp",
    },
    {
      title: "Rick And Morty - Wiki",
      url: "https://martin-paredes-rick-and-morty-wiki.netlify.app/",
      image: rick_and_morty,
      className: "rick-and-morty",
    },
    {
      title: "Basic Calculator",
      url: "https://martin-paredes-basic-calculator.netlify.app/",
      image: basicCalculator,
      className: "basic-calculator",
    },
  ];

  return (
    <div>
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-container">
        {projectsData.map((project, index) => (
          <div key={index} className={`${project.className}-container`}>
            <h3 className="app-title">{project.title}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="img-portfolio"
                src={project.image}
                alt={project.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;