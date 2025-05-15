import React from "react";
// import { BlogSidebar } from "../blogs/BlogSidebar";
import blogDetails1 from "../../assets/alec-img/judgement/2.jpg"
export const JudgementDetailContent = ({ children }) => {
  return (
    <section id="margin-top">
      <div className="td_height_20 td_height_lg_20" />
      <div className="container">
        <div>
          <h1>Balaji Raghavan v. Union of India (1996) 1 SCC 361</h1>
          <p>(Landmark Judgement)</p>
        </div>
        <div className="row td_row_reverse_lg td_gap_y_50">
          {/* list */}

          <div className="col-lg-6">{children}</div>
          <div className="col-lg-6">
            <img src={blogDetails1} alt="Blog Details" />

          </div>

        </div>
      </div>

    </section>
  );
};
