import Header from "../../components/Header"
import ProjectsPageBody from "./ProjectsPageBody"
import './ProjectsPage.css'
import Footer from "../../components/Footer"
function ProjectsPage() {
  return (

    <div className='container'>
      <div className='sub-container'>
        <title>Projects</title>
        <Header />
        <ProjectsPageBody />
        <Footer />
      </div>
    </div>
  );
}
export default ProjectsPage