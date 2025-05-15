import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";
import courseThumb1 from "../../assets/alec-img/judgement/latestjudgement-686.jpg";
import courseThumb5 from "../../assets/alec-img/judgement/2.jpg";
import courseThumb6 from "../../assets/alec-img/judgement/3.jpg";
import courseThumb7 from "../../assets/alec-img/judgement/4.jpg";
import courseThumb8 from "../../assets/alec-img/judgement/5.jpg";
import courseThumb9 from "../../assets/alec-img/judgement/6.jpg";
import courseThumb10 from "../../assets/alec-img/judgement/7.jpg";

export const CoursesAllList = () => {
  const courses = [
    {
      id: 1,
      thumb: courseThumb1,
      label: "12 - Apr - 2025",
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      price: 39,
      instructor: "Robert Anderson",
    },
    {
      id: 2,
      thumb: courseThumb5,
      label: "12 - Mar - 2025",
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      price: 89,
      instructor: "Robert Anderson",
    },
    {
      id: 3,
      thumb: courseThumb6,
      label: "12 - Apr - 2025",
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      price: 19,
      instructor: "Jhon Doe",
    },
    {
      id: 4,
      thumb: courseThumb7,
      label: "12 - Apr - 2025",
      seats: 170,
      semesters: 19,
      title: "Hone Leadership & Achieve Success",
      rating: 5,
      totalRatings: 50,
      price: 89,
      instructor: "Mary Krisey",
    },
    {
      id: 5,
      thumb: courseThumb8,
      label: "12 - Apr - 2025",
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      price: 39,
      instructor: "Robert Anderson",
    },
    {
      id: 6,
      thumb: courseThumb9,
      label: "12 - Apr - 2025",
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      price: 89,
      instructor: "Robert Anderson",
    },
    {
      id: 7,
      thumb: courseThumb10,
      label: "12 - Apr - 2025",
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      price: 19,
      instructor: "Jhon Doe",
    },

  ];

  return (
    <div className="row td_gap_y_10 td_row_gap_30">
      {courses.map((course) => (
        <div key={course.id} className="col-xl-12">
          <div className="td_card td_style_5 td_type_3">
            <Link to="/course-details" className="td_card_thumb">
              <span className="td_card_thumb_in td_radius_10">
                <img src={course.thumb} alt={course.title} />
                <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                  {course.label}
                </span>
              </span>
            </Link>
            <div className="td_card_content">

              <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                <Link to="/course-details">{course.title}</Link>
              </h2>

              <div>
                <p>The case of Sheela Barse v. State of Maharashtra is a landmark judgment in India, shaping the course of juvenile justice and human rights.
                   Social activist Sheela Barse played a pivotal role by raising her voice against the inhumane conditions prevalent in Indian jails and juvenile
                    homes, bringing attention to the need for reform and justice. Facts of the case Journalist Sheela Barse, based in Bombay, sought permission to
                     interview female inmates in Maharashtra prisons. She was told she could....</p>
              </div>
              {/* <div className="td_card_price_wrap td_mb_12">
                <div className="td_card_review">
                  <div className="td_rating" data-rating={course.rating}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <div className="td_rating_percentage">
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </div>
                  </div>
                  <span className="td_heading_color td_opacity_5 td_fs_14">
                    (5.0/{course.totalRatings} Ratings)
                  </span>
                </div>
                <span className="td_card_price td_accent_color td_fs_18 td_medium">
                  ${course.price}
                </span>
              </div> */}
              <div className="td_card_btns_wrap justify-content-between ">
                <Link
                  to="/blog-details"
                  className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14"
                >
                  <span className=" td_accent_color">
                    <span>Posted By : </span>

                    <span className="td_fs_18 td_medium td_heading_color">
                  {course.instructor}
                </span>
                  </span>


                </Link>

                <Link  to="/judgements-details"
                  className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14">
                <span className="td_btn_in td_white_color td_accent_bg">Read more...</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
