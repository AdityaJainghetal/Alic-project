import React from "react";
import { BlogOneItem } from "./BlogOneItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import post1 from "../../assets/alec-img/blogs/one.jpg";
import post2 from "../../assets/alec-img/blogs/two.jpg";
import post3 from "../../assets/alec-img/blogs/three.jpg";

export const BlogOne = () => {
  const blogPosts = [
    {
      src: post1,
      date: "22 Mar 2025",
      author: "Aishwarya Chourasia",
      title: "Justice Yashwant Varma transfer? What is the In-House Enquiry Procedure?",
      description: "Introduction The legal fraternity was shaken when reports emerged regarding.",
      delay: "0.2s",
    },
    {
      src: post2,
      date: "21 Mar 2025",
      author: "Aishwarya Chourasia",
      title: "How Can High Court Judges Be Removed?",
      description: "Recently a major controversy erupted after a large amount of unaccounted.",
      delay: "0.3s",
    },
    {
      src: post3,
      date: "21 Mar 2025",
      author: "Manas Shrivastava",
      title: "Vested and Contingent Interest under the Transfer of Property Act 1882",
      description: "When a property is transferred, the interest of the transferee.",
      delay: "0.4s",
    },
  ];

  return (
    <section>
      <div className="td_height_20 td_height_lg_20" />
      <div className="px-3 px-md-5">
        <div className="td_section_heading td_style_1 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
          <p className="td_section_subtitle_up td_fs_30 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            BLOG & ARTICLES
          </p>
          <h2 className="td_section_title td_fs_30 mb-0">
            Take A Look At The Latest <br /> Articles
          </h2>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on tablets
            1024: { slidesPerView: 3 }, // Show 3 slides on desktops
          }}
          className="blog-slider"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay={post.delay}>
                <BlogOneItem {...post} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="td_height_60 td_height_lg_80" />
    </section>
  );
};
