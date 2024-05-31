import ProjectImage1 from '../assets/images/project1.png';
import ProjectImage2 from '../assets/images/project2.png';
import ProjectImage3 from '../assets/images/project3.png';
import ProjectImage4 from '../assets/images/project4.jpg';


const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: ProjectImage1, // Image URL for Project 1
      link: "#" // Change this to the actual link if available
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      image: ProjectImage2, // Image URL for Project 2
      link: "#" // Change this to the actual link if available
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      image: ProjectImage3, // Image URL for Project 3
      link: "#" // Change this to the actual link if available
    },
    {
      title: "Project 4",
      description: "A brief description of Project 4.",
      image: ProjectImage4,
      link: "#" // Change this to the actual link if available
    },
    // Add more projects as needed
  ];
  
  return (
    <section className="project-section bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="projects" className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <a href={project.link} className="block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-96 object-cover grayscale blur-1xl transition duration-300" 
                />
              </a>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  
  
  
}


export default Projects;
