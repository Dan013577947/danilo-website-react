function AboutPageBody() {
  return (
    <div className="about-body">
      <div>
        <h3>My Journey</h3>
        <p className="description">
          My interest in web development began with a simple curiosity about how websites work. I started experimenting with HTML and CSS, and over time, I discovered how powerful JavaScript and React can be in creating interactive web experiences. As I continue learning, I’m now expanding my skills beyond front-end development to understand the full picture of how web applications work—from the user interface to the server and database. I enjoy combining creativity with logic to build projects that are both functional and enjoyable to use.
        </p>
        <br />
        <h3>Skills and Tools</h3>
        <span className="description">Here are some of the technologies and tools I’m comfortable with:</span>
        <div className="skills">
          <i className="fa-brands fa-about test fa-html5">
            <span className="tooltip"> HTML</span>
          </i>
          <i className="fa-brands fa-about fa-css3-alt">
            <span className="tooltip"> CSS</span>
          </i>
          <i className="fa-brands fa-about fa-js">
            <span className="tooltip"> Javascript</span>
          </i>
          <i className="fa-brands fa-about fa-react">
            <span className="tooltip"> ReactJs</span>
          </i>
          <i className="fa-brands fa-about fa-python">
            <span className="tooltip"> Python</span>
          </i>
          <i className="fa-solid fa-about fa-database">
            <span className="tooltip"> SQL</span>
          </i>
        </div>
        <br />
        <h3>My Goal</h3>
        <span className="description">
          I aim to become a well-rounded Web Developer who can design, build, and maintain complete web applications. I believe that simplicity, clarity, and performance are the foundations of great development. For now, I’m focused on mastering the fundamentals of web development and expanding my knowledge in Node.js and backend technologies through personal projects and continuous learning.
        </span>
      </div>
    </div>
  );
}

export default AboutPageBody