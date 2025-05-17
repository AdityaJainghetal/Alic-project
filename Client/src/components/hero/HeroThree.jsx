// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import axios from "axios";
// import "swiper/css";
// import "swiper/css/pagination";

// export const HeroThree = () => {
//   const [formData, setFormData] = useState({
//     Name: "",
//     Phone: "",
//     State: "",
//     Medium: "",
//     message: "",
//   });
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/banner/alldisplay');
//         setBanners(response.data);
//       } catch (error) {
//         console.error('Error fetching banners:', error);
//       }
//     };
//     fetchBanners();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/query/create', formData);
//       console.log(response.data);
//       alert("Query submitted successfully!");
//       setFormData({
//         Name: "",
//         Phone: "",
//         State: "",
//         Medium: "",
//         Message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Submission failed. Please try again.");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .glass-slider {
//           background: rgba(255, 255, 255, 0.12);
//           backdrop-filter: blur(12px);
//           border-radius: 25px;
//           box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//         }

//         .neumorphic-form {
//           background: #e0e5ec;
//           border-radius: 25px;
//           padding: 35px;
//           box-shadow: 10px 10px 25px #c1c4cb, -10px -10px 25px #ffffff;
//         }

//         .form-floating {
//           position: relative;
//           margin-bottom: 1rem;
//         }

//         .form-floating input,
//         .form-floating select,
//         .form-floating textarea {
//           background: transparent;
//           border: none;
//           border-bottom: 2px solid #aaa;
//           border-radius: 0;
//           outline: none;
//           width: 100%;
//           padding: 10px 0;
//           font-size: 16px;
//         }

//         .form-floating label {
//           position: absolute;
//           top: 10px;
//           left: 0;
//           font-size: 14px;
//           transition: 0.3s;
//           color: #666;
//           pointer-events: none;
//         }

//         .form-floating input:focus + label,
//         .form-floating input:not(:placeholder-shown) + label,
//         .form-floating select:focus + label,
//         .form-floating select:not([value=""]) + label,
//         .form-floating textarea:focus + label,
//         .form-floating textarea:not(:placeholder-shown) + label {
//           top: -15px;
//           font-size: 12px;
//           color: #000;
//         }

//         .form-submit {
//           background: linear-gradient(to right, #ED1E24, #b50004);
//           color: #fff;
//           border: none;
//           padding: 12px;
//           border-radius: 25px;
//           width: 100%;
//           font-weight: bold;
//           font-size: 16px;
//           transition: 0.3s ease;
//           cursor: pointer;
//         }

//         .form-submit:hover {
//           background: linear-gradient(to right, #b50004, #ED1E24);
//           transform: translateY(-2px);
//           box-shadow: 0 4px 15px rgba(237, 30, 36, 0.4);
//         }

//         .swiper-pagination-bullet {
//           background: #0072ff;
//           opacity: 0.6;
//           transition: 0.3s;
//         }

//         .swiper-pagination-bullet-active {
//           transform: scale(1.3);
//           opacity: 1;
//         }

//         @media (max-width: 768px) {
//           .neumorphic-form {
//             padding: 20px;
//           }
//         }
//       `}</style>

//       <div className="container-fluid mt-0 px-4" id="contact-sec">
//         <div className="row g-4 align-items-stretch my-3">
//           {/* Left Side: Slider */}
//           <div className="col-12 col-xl-8">
//             <div className="glass-slider h-100">
//               <Swiper
//                 modules={[Autoplay, Pagination]}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 pagination={{ clickable: true }}
//                 loop={true}
//                 style={{ borderRadius: "15px", height: "100%" }}
//               >
//                 {banners.map((banner, index) => (
//                   <SwiperSlide key={index}>
//                     {console.log(banner, "sdas")};

//                     <a href={banner.URL}
//                     >
//                     <img
//                       src={banner.images[0]}
//                       alt={`Slide ${index + 1}`}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         borderRadius: "15px",
//                       }}
                      
//                     />
//                     </a>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>

//           {/* Right Side: Form */}
//           <div className="col-12 col-xl-4">
//             <div className="neumorphic-form h-100">
//               <h5 className="text-center fw-bold mb-4 td_accent_color">
//                 Do you have any query? <br /> Get a call back!
//               </h5>

//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     name="Name"
//                     id="name"
//                     value={formData.Name}
//                     onChange={handleChange}
//                     required
//                     placeholder=" "
//                   />
//                   <label htmlFor="name">Your Name*</label>
//                 </div>

//                 <div className="form-floating">
//                   <input
//                     type="number"
//                     name="Phone"
//                     id="phone"
//                     value={formData.Phone}
//                     onChange={handleChange}
//                     maxLength="10"
//                     required
//                     placeholder=" "
//                   />
//                   <label htmlFor="phone">Phone Number*</label>
//                 </div>


//                      <div className="form-floating">
//                   <input
//                     type="text"
//                     name="State"
//                     id="State"
//                     value={formData.State}
//                     onChange={handleChange}
                    
//                     required
//                     placeholder=" "
//                   />
//                   <label htmlFor="phone">Enter your State</label>
//                 </div>


               
//                      <div className="form-floating">
//                   <input
//                     type="text"
//                     name="Medium"
//                     id="Medium"
//                     value={formData.Medium}
//                     onChange={handleChange}
                    
//                     required
//                     placeholder=" "
//                   />
//                   <label htmlFor="phone">Enter your Medium</label>
//                 </div>

//                 <div className="form-floating">
//                   <textarea
//                   type="text"
//                     name="message"
//                     id="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="2"
//                     placeholder=" "
//                   ></textarea>
//                   <label htmlFor="message">Your Message</label>
//                 </div>

//                 <div className="mt-3">
//                   <button type="submit" className="form-submit">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

export const HeroThree = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    State: "",
    Medium: "",
    Message: "",
  });

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:8000/banner/alldisplay");
        // http://localhost:8000
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/query/create", formData);
      console.log(response.data);
      alert("Query submitted successfully!");
      setFormData({
        Name: "",
        Phone: "",
        State: "",
        Medium: "",
        Message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        .glass-slider {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 25px;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .neumorphic-form {
          background: #e0e5ec;
          border-radius: 25px;
          padding: 35px;
          box-shadow: 10px 10px 25px #c1c4cb, -10px -10px 25px #ffffff;
        }

        .form-floating {
          position: relative;
          margin-bottom: 1rem;
        }

        .form-floating input,
        .form-floating textarea {
          background: transparent;
          border: none;
          border-bottom: 2px solid #aaa;
          border-radius: 0;
          outline: none;
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
        }

        .form-floating label {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 14px;
          transition: 0.3s;
          color: #666;
          pointer-events: none;
        }

        .form-floating input:focus + label,
        .form-floating input:not(:placeholder-shown) + label,
        .form-floating textarea:focus + label,
        .form-floating textarea:not(:placeholder-shown) + label {
          top: -15px;
          font-size: 12px;
          color: #000;
        }

        .form-submit {
          background: linear-gradient(to right, #ED1E24, #b50004);
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 25px;
          width: 100%;
          font-weight: bold;
          font-size: 16px;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .form-submit:hover {
          background: linear-gradient(to right, #b50004, #ED1E24);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(237, 30, 36, 0.4);
        }

        .swiper-pagination-bullet {
          background: #0072ff;
          opacity: 0.6;
          transition: 0.3s;
        }

        .swiper-pagination-bullet-active {
          transform: scale(1.3);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .neumorphic-form {
            padding: 20px;
          }
        }
      `}</style>

      <div className="container-fluid mt-0 px-4" id="contact-sec">
        <div className="row g-4 align-items-stretch my-3">
          {/* Slider */}
          <div className="col-12 col-xl-8">
            <div className="glass-slider h-100">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                style={{ borderRadius: "15px", height: "100%" }}
              >
                {banners.map((banner, index) => (
                  <SwiperSlide key={index}>
                    <a href={banner.URL}>
                      <img
                        src={banner.images[0]}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-xl-4">
            <div className="neumorphic-form h-100">
              <h5 className="text-center fw-bold mb-4 td_accent_color">
                Do you have any query? <br /> Get a call back!
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="form-floating">
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Your Name*</label>
                </div>

                <div className="form-floating">
                  <input
                    type="tel"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    required
                    placeholder=" "
                  />
                  <label>Phone Number*</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    name="State"
                    value={formData.State}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Enter your State</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    name="Medium"
                    value={formData.Medium}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Enter your Medium</label>
                </div>

                <div className="form-floating">
                  <textarea
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows="2"
                    placeholder=" "
                  ></textarea>
                  <label>Your Message</label>
                </div>

                <div className="mt-3">
                  <button type="submit" className="form-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
