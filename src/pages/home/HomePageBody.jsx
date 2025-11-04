function HomePageBody() {
  return (
    <>
      <div className="home-body">
        <div className="home-left-section">
          <div className="home-left-section-left-space"></div>
          <div className="home-left-section-contents">
            <h3>Hello, It's Me</h3>
            <h1 className='my-name'>Danilo Alvaro</h1>
            <h3 className='my-aspirant-text'>And I'm aspirant <span className="highlight">Web Developer</span></h3>
            <p className="description my-intro">I’m a passionate Web Developer who turns creative ideas into user-friendly and visually engaging web experiences. I enjoy building clean, functional interfaces using HTML, CSS, JavaScript, and React.js.</p>
            <div className="websites-links">
              <a href="https://www.linkedin.com/in/danilo-alvaro-16b17534b/" target="_blank" className="linkedin-link">
                <i className="fa-brands fa-home fa-linkedin"></i>
              </a>
              <a href="https://github.com/Dan013577947" target="_blank" className="github-link">
                <i className="fa-brands fa-home fa-github"></i>
              </a>
            </div>
            <a href="/alvaro_danilo_resume.pdf" download="Danilo_Alvaro_Resume.pdf" className="dload-resume">
              Download Resume
            </a>
          </div>
          <div className="home-left-section-right-space"></div>

        </div>
        <div className="home-right-section">
          <div className="home-right-section-left-space"></div>
          <div className="home-right-section-content">
            <img src="daniloimage.png" alt="My image" />
          </div>
          <div className="home-right-section-right-space"></div>
        </div>
      </div>
    </>
  );
}

export default HomePageBody
