
const AboutMe = () => {
  const sections = [
    {
      title: "Education",
      items: [
        {
          subtitle: "Academlo - 2022",
          title: "Front-end Development JavaScript Vanilla",
          text: "Front-end developer skills, from HTML, CSS, JS, react, Node.js in progress, teamwork and Git version control and Github"
        }
      ]
    },
    {
      title: "Experience",
      items: [
        {
          subtitle: "Academlo - 2022",
          title: "Front-end Development with React",
          text: "I have developed projects with JavaScript Vanilla, HTML and CSS, also using react together with libraries like react-router and redux. Also developing teamwork skills with completed projects."
        }
      ]
    },
    {
      title: "Skills",
      items: [
        {
          title: "Tech skills",
          text: "HTML, CSS, JavaScript, React, Node.js, Git, Github, Bootstrap"
        }
      ]
    },
    {
      title: "Soft skills",
      items: [
        {
          title: "Soft skills",
          text: "Creative, Teamwork, Patience, Communication, Fast learning, Problem resolution"
        }
      ]
    }
  ];



  return (
    <div className="bg-white">
      {sections.map((section, index) => (
        <div key={index} className="section-container">
          <h2 className="text-cyan-500 font-bold">{section.title}</h2>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="section-item">
              {item.subtitle && <h3 className="subtitle">{item.subtitle}</h3>}
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;