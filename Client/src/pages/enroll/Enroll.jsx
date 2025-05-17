// import React from "react";
// import { Layout } from "../../layouts/Layout";
// // import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import contactImg from "../../assets/alec-img/contact/enroll.avif";
// import { useParams } from "react-router-dom";

// export const Enroll = () => {
//      const { id } = useParams();
//   const [productData, setProductData]=useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     message: "",
//   });


//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});


//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };
  

//    const loadProducts=async()=>{

//     try {
//       const response = await axios.get(`http://localhost:8000/enroll/getproducts/${id}`);
//       const prodductData= response.data;
//       setProductData(prodductData);
//     } catch (error) {
//       console.log(error);
//     }

// }
//   useEffect(()=>{
//     loadProducts();
//   },[]);
  
//   return (
//       <Layout header={9} footer={1}>
//          <section id="margin-top" className="contact-section py-5 bg-light">
//             <div className="container">
//               <div className="row g-4 d-flex align-items-stretch">
//                 {/* Left: Contact Form */}
//                 <div className="col-lg-6 d-flex">
//                   <div className="contact-form p-4 shadow rounded bg-white w-100 h-100">
//                     <h3 className="mb-4 td_accent_color fw-bold">Enroll Now</h3>
//                     <form>
//                       <div className="mb-3">
//                         <label className="form-label fw-semibold">Full Name</label>
//                         <input type="text" className="form-control" placeholder="Enter your name" required 
                        
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label fw-semibold">Email</label>
//                         <input type="email" className="form-control" placeholder="Enter your email" required 
                        
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label fw-semibold">Phone</label>
//                         <input type="tel" className="form-control" placeholder="Enter your phone number" required 
                       
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                         />
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label fw-semibold">City</label>
//                         <input type="text" className="form-control" placeholder="Enter your City" required 
                        
//                     id="city"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label fw-semibold">Message</label>
//                         <textarea className="form-control" rows="4" placeholder="Write your message" required
//                          type="text"
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                         ></textarea>
//                       </div>
//                       <button type="submit" className="th-btn td_btn_in td_white_color td_accent_bg py-2 border-0 rounded w-100 fw-semibold">
//                         Send Message
//                       </button>
//                     </form>
//                   </div>
//                 </div>

//                 {/* Right: Contact Details */}
//                 <div className="col-lg-6 d-flex">
//         <div className="contact-details p-4 shadow-lg rounded bg-white w-100 h-100">
//         <img style={{ height:"100%" }} src={contactImg} alt="" />
//         </div>
//       </div>


//               </div>
//             </div>
//           </section>

//           </Layout>
//   )
// }

// export default Enroll






import React, { useState, useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import contactImg from "../../assets/alec-img/contact/enroll.avif";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Enroll = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.city) newErrors.city = "City is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Submit form data
      const response = await axios.post(`http://localhost:8000/enroll/${id}`, formData);
      console.log("Form submitted successfully:", response.data);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
      alert("Enrollment submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const loadProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/enroll/getproducts/${id}`);
      const productData = response.data;
      setProductData(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [id]);

  return (
    <Layout header={9} footer={1}>
      <section id="margin-top" className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row g-4 d-flex align-items-stretch">
            {/* Left: Contact Form */}
            <div className="col-lg-6 d-flex">
              <div className="contact-form p-4 shadow rounded bg-white w-100 h-100">
                <h3 className="mb-4 td_accent_color fw-bold">Enroll Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? "is-invalid" : ""}`} 
                      placeholder="Enter your name" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                      placeholder="Enter your email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input 
                      type="tel" 
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`} 
                      placeholder="Enter your phone number" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">City</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.city ? "is-invalid" : ""}`} 
                      placeholder="Enter your City" 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Write your message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="th-btn td_btn_in td_white_color td_accent_bg py-2 border-0 rounded w-100 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Contact Details */}
            <div className="col-lg-6 d-flex">
              <div className="contact-details p-4 shadow-lg rounded bg-white w-100 h-100">
                <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={contactImg} alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enroll;