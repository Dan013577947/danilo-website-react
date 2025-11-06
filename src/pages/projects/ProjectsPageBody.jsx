
function ProjectsPageBody() {
  return (
    <div className="projects-body">
      <div>
        <h3>My Projects</h3>
        <div className="description">
          Throughout my programming journey, I’ve explored various technologies and built many projects — from simple games to desktop applications, hardware programming, and automation tools. Recently, I’ve shifted my focus to React.js and front-end development, creating projects that are now connected to the web. While my earlier works weren’t focused on front-end development, they helped me build a strong foundation in logic and problem-solving, which I now apply to web development.
        </div>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/n7Qw__cRfIk"
            allowFullScreen
            frameBorder='0'
          >
          </iframe>  
          <div className="project-description">
            <div className="column-description">
              <div>
                <h1 className="highlight project-title">InventoProfit</h1> InventoProfit is a Final group project and I am the main contributor. I made the program using Python and Tkinter Library for GUI, it has features such as QR code auto generate for each item added, QR code scan using laptop/desktop camera, login and creation account system, forgot password, sales history, daily sales, weekly sales, monthly sales, expenses handling, inventory, and so on. I used txt as database, and used own logic to manipulate the database in txt. The project needed patience and data handling skills.
              </div>
              <div>
                <h3 className="tech-stack-text">Tech Stack</h3>
                <i className="fa-brands fa-projects fa-python">
                  <span className="tooltip"> Python</span>
                </i>
                <i className="fa-solid fa-projects fa-database">
                  <span className="tooltip"> Database (.txt)</span>
                </i>
              </div>
            </div>

          </div>    
          <iframe
            src="https://www.youtube.com/embed/tKzQoBZK0nY"
            allowFullScreen
            frameBorder='0'
          >
          </iframe>
          <div className="project-description">
            <div className="column-description">
              <div>
                <h1 className="highlight project-title">Remote-Controlled Light Bulb System</h1> This is a Final project made using Arduino. Light Bulbs can be set automatically/manually and how many bulbs to use depends on what the user wants. It also have an option to set the time and date so the user can select when he wants to use the bulb/s. The project needed date and time handling, data structures and algorithms, and accurate timing of bulbs and LCD
              </div>
              <div>
                <h3 className="tech-stack-text">Tech Stack</h3>
                <i className="fa-solid fa-projects fa-microchip">
                  <span className="tooltip"> Arduino</span>
                </i>
                <i className="fa-solid fa-projects fa-gear">
                  <span className="tooltip"> Hardware</span>
                </i>
                <i className="fa-brands fa-projects fa-cuttlefish">
                  <span className="tooltip"> C++</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPageBody