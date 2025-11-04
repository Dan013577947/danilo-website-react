import { useRef} from "react"
import emailjs from '@emailjs/browser'

function ContactForm() {
  const form = useRef();
  const serviceId = "service_vjgrxx2";
  const templateId = "template_1wufotd";
  const publicKey = "FTvqSefeFXx49X177";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        alert("Sending Email successful");
        form.current.reset();
      }, (error) => {
        alert("There's an error while sending the Email", error.text);
      }
    );
  }
  return (
    
    <form className="form" ref={form} onSubmit={sendEmail}>
      <h3>Kindly fill in the form below.</h3>
      <div>
        <input className="user_name input-fields" name="user_name" type="text" placeholder="Full Name" required />
      </div>
      <div>
        <input className="user_email input-fields" name="user_email" type="email" placeholder="Email" required />
      </div>
      <div>
        <input className="subject input-fields" name="subject" type="text" placeholder="Subject" required />
      </div>
      <div>
        <textarea className="user_message input-fields" name="user_message" id="" placeholder="Input your message here" required>
        </textarea>
      </div>
      <button className="submit" type="submit">Send</button>
    </form>

  );
}

export default ContactForm