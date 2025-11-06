import { Link } from "react-router"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ContactPageBody from "./ContactPageBody"

function ContactPage() {
  return (
    <div className='container'>
      <div className='sub-container'>
        <title>Contact</title>
        <Header />
        <ContactPageBody />
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage