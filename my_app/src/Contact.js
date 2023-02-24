import "./Contact.css";

function ContactUs() {
  return (
    <div className="contactus">
      <h1>&lt; Contact Us /&gt;</h1>
      <p>
        Email:
        <input className="emailtext" type="email" />
      </p>
      <p>
        Contect:
        <textarea className="textArea" rows="5" />
      </p>
      <button className="sendbtn" type="submit" value="Send">
        Send
      </button>
    </div>
  );
}

export default ContactUs;
