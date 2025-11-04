import ContactForm from './ContactForm';
import './ContactPage.css'

function ContactPageBody() {
  const openEmail = () => {

    const email = "daniloalvaro031717@gmail.com";
    const subject = "Clicked the Email from my website";
    const body = "Hi Dan, I’d like to say something...";

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );

  }
  return (
    <div className="contact-body">
      <div className="contact-left-section">
        <p className='highlight get-in-touch'>Get in Touch</p>
        <h3 className='highlight'>I'd like to hear from you!</h3>
        <div className="gmail">
          <a onClick={openEmail} className='no-color no-underline gmail link-container' >
            <img className='uploaded-img gmail-img' src="gmail.png" alt="gmail" />
            <span className='notice'>daniloalvaro031717@gmail.com</span>
          </a>
        </div>
        <div className="linkedin">
          <a className='no-color no-underline link-container' target='_blank' href="https://www.linkedin.com/in/danilo-alvaro-16b17534b/">
            <img className='uploaded-img linkedin-img' src="linkedin.png" alt="linkedin" />
            <span className='notice'>Let’s connect professionally and grow our network.</span>
          </a>

        </div>
        <div className="github">
          <a className='no-color no-underline link-container' target='_blank' href="https://github.com/Dan013577947" >
            <img className='uploaded-img github-img' src="github.png" alt="github" />
            <span className='notice'>Check out my open-source projects and code experiments.</span>
          </a>

        </div>
        <div className="facebook">
          <a className='no-color no-underline link-container' target='_blank' href="https://www.facebook.com/welplayed.com.019283">
            <img className='uploaded-img facebook-img' src="fb.png" alt="facebook" />
            <span className='notice'>Like me on Facebook</span>
          </a>

        </div>

        <div className="youtube">
          <a className='no-color no-underline link-container' target='_blank' href="https://www.youtube.com/@daniloalvaro2142">
            <img className='uploaded-img youtube-img' src="yt.png" alt="youtube" />
            <span className='notice'>Watch my projects and tutorials on YouTube.</span>
          </a>
        </div>
        <div className="phone link-container">
          <img className='uploaded-img contact-img' src="contact.png" alt="youtube" />
          <span className='notice'>+639991826346</span>

        </div>

      </div>
      <div className="contact-right-section">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPageBody