import './styles/contact.css'

function Contact() {

  return (
    <div className="get-in-touch">
      <h1>Lets Get In Touch <span className = "title-icon">&lt;/&gt;</span></h1>
      <div className="contact-section">
        <div className="contact-item">
        <i className="fa fa-envelope"></i>
        <h3>Email</h3>
          <p>kchong1902@gmail.com</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <h3>Phone Number</h3>
          <p>604-679-4513</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-linkedin"></i>
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/kevin-c-803818137">https://www.linkedin.com/in/kevin-c-803818137</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact