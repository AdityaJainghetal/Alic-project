import React, { useEffect, useState } from "react";
import image1 from "../../assets/alec-img/blogs/one.jpg";
import image2 from "../../assets/alec-img/blogs/two.jpg";
import image3 from "../../assets/alec-img/blogs/three.jpg"; // add more as needed

const updatesRight = [
  {
    date: "24 Apr 2025",
    content: `Mains Practice Question (GS paper 4) - "Nothing is at last sacred but the integrity of your own mind..."`,
    link: "#",
  },
  {
    date: "24 Apr 2025",
    content: "Editorial Quiz (23rd April 2025)",
    link: "#",
  },
  {
    date: "23 Apr 2025",
    content: "Thorium Nuclear Reactor | China | Latest Update | Drishti IAS English-Watch on Youtube",
    link: "#",
  },
  {
    date: "24 Apr 2025",
    content: "Editorial Quiz (23rd April 2025)",
    link: "#",
  },
  {
    date: "23 Apr 2025",
    content: "Thorium Nuclear Reactor | China | Latest Update | Drishti IAS English-Watch on Youtube",
    link: "#",
  },
];

const images = [image1, image2, image3]; // carousel images

const Card = ({ date, content, link }) => (
  <div className="border-bottom py-3">
    <div className="d-flex align-items-center text-muted small fw-semibold mb-1">
      <span className="material-icons me-2" style={{ fontSize: "16px" }}>
        calendar_today
      </span>
      {date}
    </div>
    <p className="fst-italic mb-0 text-dark">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
        {content}
      </a>
    </p>
  </div>
);

export default function RecentUpdates() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-5 px-3 px-md-5">
      <p className="td_section_subtitle_up td_fs_30 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color text-center">
        Recent updates on Aashyein Judiciary
      </p>
      <p className="text-center text-secondary fw-semibold fs-5 mb-5">
        Scroll down to check out our latest articles.
      </p>

      <div className="row g-4" style={{ minHeight: "400px" }}>
        {/* Left image carousel */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={images[currentImageIndex]}
            alt="Recent Updates"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right updates section */}
        <div className="col-md-6 d-flex flex-column">
          <div
            className="px-4 py-3 text-white fw-semibold d-flex align-items-center"
            style={{ background: "linear-gradient(to right, #ED1E24, #b50004)" }}
          >
            <span className="material-icons me-2" style={{ fontSize: "18px" }}>
              star
            </span>
            नया क्या है?
          </div>
          <div className="px-4 py-3 flex-grow-1 scrollable-area bg-light">
            {updatesRight.map((item, idx) => (
              <Card key={idx} date={item.date} content={item.content} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional CSS injection if not using external CSS
const styles = `
  .scrollable-area {
    overflow-y: auto;
    max-height: 340px;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
