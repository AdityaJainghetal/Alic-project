import React from "react";
import { Layout } from "../../layouts/Layout";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../../assets/alec-img/contact/enroll.avif";

export const Enroll = () => {
  return (
      <Layout header={9} footer={1}>
         <section id="margin-top" className="contact-section py-5 bg-light">
            <div className="container">
              <div className="row g-4 d-flex align-items-stretch">
                {/* Left: Contact Form */}
                <div className="col-lg-6 d-flex">
                  <div className="contact-form p-4 shadow rounded bg-white w-100 h-100">
                    <h3 className="mb-4 td_accent_color fw-bold">Enroll Now</h3>
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
                        <label className="form-label fw-semibold">City</label>
                        <input type="tel" className="form-control" placeholder="Enter your City" required />
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
        <img style={{ height:"100%" }} src={contactImg} alt="" />
        </div>
      </div>


              </div>
            </div>
          </section>

          </Layout>
  )
}

export default Enroll