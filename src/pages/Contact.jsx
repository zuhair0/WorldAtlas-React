export const Contact = () => {
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action="">
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="email"
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
