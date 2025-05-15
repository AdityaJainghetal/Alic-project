import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import post1 from "../../assets/alec-img/success/top1.jpg";
import post2 from "../../assets/alec-img/success/top2.jpg";
import post3 from "../../assets/alec-img/success/top3.jpg";
import post4 from "../../assets/alec-img/success/top4.jpg";
import post5 from "../../assets/alec-img/success/top5.jpg";
import { Layout } from "../../layouts/Layout";

const successStories = [
  {
    name: "DWIJ SINGH SENGAR",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post1,
  },
  {
    name: "ANJEETA KHUTEY",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post2,
  },
  {
    name: "SHIVANGI SHARMA",
    service: "BIHAR JUDICIAL SERVICES - 2024",
    image: post3,
  },
  {
    name: "ANJEETA KHUTEY",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post4,
  },
  {
    name: "SHIVANGI SHARMA",
    service: "BIHAR JUDICIAL SERVICES - 2024",
    image: post5,
  },
  {
    name: "DWIJ SINGH SENGAR",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post1,
  },
  {
    name: "ANJEETA KHUTEY",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post2,
  },
  {
    name: "SHIVANGI SHARMA",
    service: "BIHAR JUDICIAL SERVICES - 2024",
    image: post3,
  },
  {
    name: "ANJEETA KHUTEY",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post4,
  },
  {
    name: "SHIVANGI SHARMA",
    service: "BIHAR JUDICIAL SERVICES - 2024",
    image: post5,
  },
  {
    name: "ANJEETA KHUTEY",
    service: "CHHATTISGARH JUDICIAL SERVICES - 2023",
    image: post4,
  },
  {
    name: "SHIVANGI SHARMA",
    service: "BIHAR JUDICIAL SERVICES - 2024",
    image: post5,
  },
];

const SuccessStories = () => {
  return (
    <Layout header={9} footer={1}>
      <section className="py-5 text-center bg-light mt-5">
        <div className="container">
          <h2 style={{ paddingTop: "5vmax" }} className="text-danger fw-bold text-uppercase">
            Success Story
          </h2>
          <h3 className="fs-2 fw-bold mt-2 mb-4 text-dark">
            Our Recent Success Stories
          </h3>

          <div className="row g-4">
            {successStories.map((story, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card border-0 shadow-sm p-3 rounded-3 h-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="card-img-top rounded-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">{story.name}</h5>
                    <p className="card-text text-muted">{story.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
