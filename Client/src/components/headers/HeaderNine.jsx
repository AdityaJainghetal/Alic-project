import React from "react";
import { Link } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import callIcon from "../../assets/img/icons/call.svg";
import envelopeIcon from "../../assets/img/icons/envlop.svg";
import Logo from "../../assets/alec-img/courses/alec-for-judiciary-removebg-preview.png";


export const HeaderNine = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
         <div className="td_top_header td_heading_bg td_white_color">
        <div className="td_top_header_in">
          <div className="td_top_header_left">
            <ul className="td_header_contact_list td_mp_0 td_normal">
              <li style={{ listStyle: "none" }}>
                <img src={envelopeIcon} alt="envelope icon" />
                <span>
                  Address:{" "}
                  <a href="mailto:management@alec.co.in">
                    3rd Floor, Radhika Heights, 284, in front of APT House,
                    Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh
                    462011
                  </a>
                </span>
              </li>
              <li>
                <img src={envelopeIcon} alt="envelope icon" />
                <span>
                  Email:{" "}
                  <Link href="mailto:management@alec.co.in">management@alec.co.in</Link>

                </span>
              </li>
              <li>
                <img src={callIcon} alt="call icon" />
                <span>
                  Call: <a href="tel:+919691073595">+91 9691073595</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="px-3 px-md-5">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link className="td_site_branding td_accent_color" to="/">
           <img id="logo" className="logos" src={Logo} alt="Logo" style={{ width: "80px !important", height: "70px !important" }} />

              </Link>
              {/* <div className="td_header_category_wrap position-relative">
                <button className="td_header_dropdown_btn td_medium td_heading_color">
                  <img
                    src={menuSquareIcon}
                    alt="menu icon"
                    className="td_header_dropdown_btn_icon"
                  />
                  <span>All Category</span>
                  <span className="td_header_dropdown_btn_tobble_icon td_center">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 4.99997C9 4.99997 6.05404 1.00001 4.99997 1C3.94589 0.999991 1 5 1 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <ul className="td_header_dropdown_list td_mp_0">
                  <li>
                    <Link to="/courses-grid-view">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-view">Design</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Development</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-view">Architecture</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Life Style</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Marketing</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Photography</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Motivation</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="td_main_header_right">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">

                    <li>
                        <Link to="/">Home</Link>
                      </li>

                      {/* <li className="menu-item-has-children">
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">University</Link>
                          </li>
                          <li>
                            <Link to="/home-v2">Online Educations</Link>
                          </li>
                          <li>
                            <Link to="/home-v3">Education</Link>
                          </li>
                          <li>
                            <Link to="/home-v4">Kindergarten</Link>
                          </li>
                          <li>
                            <Link to="/home-v5">Modern Language</Link>
                          </li>
                          <li>
                            <Link to="/home-v6">Al-Quran Learning</Link>
                          </li>
                          <li>
                            <Link to="/home-v7">Motivation Speaker</Link>
                          </li>
                          <li>
                            <Link to="/home-v8">Kitchen Coach</Link>
                          </li>
                        </ul>
                      </li> */}


                      <li className="menu-item-has-children">
                        <Link to="">About</Link>
                        <ul>
                        <li>
                            <Link to="/about">About the institue</Link>
                          </li>
                          {/* <li>
                            <Link to="/about-institue">About the institue</Link>
                          </li> */}
                          <li>
                            <Link to="/about-institue">About the Director</Link>
                          </li>
                          <li>
                            <Link to="/about-why">Why AASHAYEIN JUDICIARY (ALEC)?</Link>
                          </li>
                          <li>
                            <Link to="/about-Director">Director's Message</Link>
                          </li>
                          <li>
                            <Link to="/success-stories">Our Success Stories</Link>
                          </li>

                        </ul>
                      </li>
                      <li>
                        <Link to="/courses-grid-view">Courses</Link>
                      </li>

                      {/* <li className="menu-item-has-children">
                        <Link to="#">Courses</Link>
                        <ul>
                          <li>
                            <Link to="/courses-grid-view">
                              Courses Grid View
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses-list-view">
                              Courses List View
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses-grid-with-sidebar">
                              Courses Grid With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item-has-children td_mega_menu">
                        <Link to="#">Pages</Link>
                        <ul className="td_mega_wrapper">
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link to="/event">Upcoming Event</Link>
                              </li>
                              <li>
                                <Link to="/event-details">Event Details</Link>
                              </li>
                              <li>
                                <Link to="/team-members">Team Members</Link>
                              </li>
                              <li>
                                <Link to="/team-member-details">
                                  Team Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link to="/students-registrations">
                                  Students Registrations
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructor-registrations">
                                  Instructor Registrations
                                </Link>
                              </li>
                              <li>
                                <Link to="/signup">Signup</Link>
                              </li>
                              <li>
                                <Link to="/signin">Signin</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Shop Pages</h4>
                            <ul>
                              <li>
                                <Link to="/faqs">Faqs</Link>
                              </li>
                              <li>
                                <Link to="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/error">Error</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li> */}

                      <li>
                        <Link to="/blog">Blogs</Link>
                      </li>


                     <li>
                        <Link to="/judgements">Judgements</Link>
                      </li>

                      {/* <li className="menu-item-has-children">
                        <Link to="#">Blogs</Link>
                        <ul>
                          <li>
                            <Link to="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link to="/blog-with-sidebar">
                              Blog With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li> */}

                      <li>
                        <Link to="/enquiry">Enquiry</Link>
                      </li>

                      {/* <li>
                        <Link to="/courses-grid-view"> Syllabus </Link>
                      </li> */}

                      <li className="menu-item-has-children">
                        <Link to="">Syllabus</Link>
                        <ul>

                        <li>
                            <Link to="/syllabus">
                            Judicial Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/judicial-services">
                            Assam Chhattisgarh
                            </Link>
                          </li>

                          <li>
                            <Link to="/judicial-bihar">
                            Bihar Prelims Papers
                            </Link>
                          </li>
                          <li>
                            <Link to="/himanchal-haryana">
                            Himachal,Haryana Prelims
                            </Link>
                          </li>
                          <li>
                            <Link to="/jharkhand-perlims">
                            Jharkhand Prelims

                            </Link>
                          </li>

                        </ul>
                      </li>

                      <li>
                        <Link to="/enroll">Enroll</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div id="social" className="td_hero_icon_btns position-relative">
              <div className="td_footer_social_btns td_fs_20">
  <a href="https://www.facebook.com/ALEC.AashayeinLawEducationCenter/?ref=aymt_homepage_panel&eid=ARBFKpMSOFFip9rKBXDsJFBZyEmuQwQsEGpW1-YxIpzMU6cON-JooBIDbVRu0SimhkeEJ0L_-JksTKcT" className="td_center" style={{ color: "#1877F2" }}> {/* Facebook Blue */}
    <i className="fa-brands fa-facebook-f"></i>
  </a>

  <a href="https://www.instagram.com/aashayein_judiciary/?igsh=MTY2NnF3M2gyeGIzNw%3D%3D#" className="td_center" style={{ color: "#E4405F" }}> {/* Instagram Pinkish-Red */}
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a href="#" className="td_center" style={{ color: "#25D366" }}> {/* WhatsApp Green */}
    <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="https://www.youtube.com/@aashayeinJ" className="td_center" style={{ color: "#FF0000" }}> {/* YouTube Red */}
    <i className="fa-brands fa-youtube"></i>
  </a>

</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
