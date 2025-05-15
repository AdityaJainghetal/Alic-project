import React from "react";
import { Layout } from "../../layouts/Layout";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import contactImg from "../../assets/img/others/contact_img.jpg";

export const Contact = () => {
  return (
   <Layout header={9} footer={1}>
   <section id="margin-top" className="contact-section py-5 bg-light">
      <div className="container">
        <div className="row g-4 d-flex align-items-stretch">
          {/* Left: Contact Form */}
          <div className="col-lg-6 d-flex">
            <div className="contact-form p-4 shadow rounded bg-white w-100 h-100">
              <h3 className="mb-4 td_accent_color fw-bold">Contact Us</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone</label>
                  <input type="tel" className="form-control" placeholder="Enter your phone number" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
                </div>
                <button type="submit" className="th-btn td_btn_in td_white_color td_accent_bg py-2 border-0 rounded w-100 fw-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="col-lg-6 d-flex">
  <div className="contact-details p-4 shadow-lg rounded bg-white w-100 h-100">
    <h3 className="mb-4 td_accent_color fw-bold">Get in Touch</h3>
    <p className="text-muted">
      Have questions? We'd love to hear from you. Reach out to us using the details below.
    </p>

    {/* Address Box */}
    <div className="d-flex align-items-center mb-5 p-3 rounded-3 shadow-sm bg-light">
      <div className="icon-box d-flex align-items-center justify-content-center me-2">
        <FaMapMarkerAlt className="text-white fs-5" />
      </div>
      <div>
        <h5 className="mb-1 fw-semibold text-dark">Our Office</h5>
        <p className="text-muted mb-0">
          3rd Floor, Radhika Heights, 284, in front of APT House, Zone-II, Maharana Pratap Nagar, Bhopal, MP 462011
        </p>
      </div>
    </div>

    {/* Phone Box */}
    <div className="d-flex align-items-center mb-5 p-3 rounded-3 shadow-sm bg-light">
      <div className="icon-box d-flex align-items-center justify-content-center me-3">
        <FaPhoneAlt className="text-white fs-5" />
      </div>
      <div>
        <h5 className="mb-1 fw-semibold text-dark">Call Us</h5>
        <p className="text-muted mb-0">+91 9691073595</p>
      </div>
    </div>

    {/* Email Box */}
    <div className="d-flex align-items-center p-3 rounded-3 shadow-sm bg-light">
      <div className="icon-box d-flex align-items-center justify-content-center me-3">
        <FaEnvelope className="text-white fs-5" />
      </div>
      <div>
        <h5 className="mb-1 fw-semibold text-dark">Email Us</h5>
        <p className="text-muted mb-0">management@alec.co.in</p>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-12 d-flex">
<div style={{ width: "100%" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ALEC:%20Civil%20Judge%20Coaching%20in%20Bhopal%20%7C%20Law%20Coaching%20in%20Bhopal+(Judiciary)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
          </div>


        </div>
      </div>
    </section>

    </Layout>
  );
};
