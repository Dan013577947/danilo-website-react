import { Link } from "react-router"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ContactPageBody from "./ContactPageBody"

function ContactPage() {
  return (
    <>
      <title>Contact</title>
      <Header /> 
      <ContactPageBody /> 
      <Footer />
    </>
  );
}

export default ContactPage