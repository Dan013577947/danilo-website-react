import { Link } from "react-router"
import Header from "../../components/Header"
import AboutPageBody from './AboutPageBody'
import './AboutPage.css'
import Footer from "../../components/Footer"

function AboutPage() {
  return (
    <div className='container'>
      <div className='sub-container'>
        <title>About</title>
        <Header />
        <AboutPageBody />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage