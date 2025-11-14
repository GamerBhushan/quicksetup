export default function Contact() {
  return (
    <div className="fade-in" style={{ padding: "3rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Reach out with any questions or feedback.</p>

      <form
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for reaching out! We’ll get back to you soon.");
        }}
      >
        <input type="text" placeholder="Full Name" required style={inputStyle} />
        <input type="email" placeholder="Email Address" required style={inputStyle} />
        <textarea placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>

      <section style={{ marginTop: "3rem" }}>
        <h3>Campus Location</h3>
        <p>123 Knowledge Ave, EduCity, USA</p>
        <iframe
          title="campus-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509144!2d144.95373631531588!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0d3d1%3A0x2d0f0b8d6a7a8dc3!2sEducation%20Campus!5e0!3m2!1sen!2sus!4v1679245881234!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "8px", marginTop: "1rem" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};
