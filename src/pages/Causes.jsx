import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Causes() {
  const [selectedCause, setSelectedCause] = useState(null);

  const causes = [
    {
      title: "Education for All",
      description:
        "We provide access to quality education, scholarships, and mentorship for underprivileged children to break the cycle of poverty.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Healthcare Access",
      description:
        "Our healthcare programs ensure access to free medical checkups, health awareness camps, and essential medicines in rural areas.",
      image: "https://images.unsplash.com/photo-1580281658629-47d4a6afc3db",
    },
    {
      title: "Women Empowerment",
      description:
        "We support women through skill training, entrepreneurship programs, and self-help groups for financial independence.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      title: "Livelihood Development",
      description:
        "Our livelihood projects help individuals develop sustainable skills to generate income and improve their standard of living.",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    },
    {
      title: "Environment Protection",
      description:
        "We promote tree plantation drives, waste management awareness, and sustainable farming to protect our planet.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      title: "Disaster Relief",
      description:
        "We provide emergency aid, food, and shelter to communities affected by natural disasters.",
      image: "https://images.unsplash.com/photo-1524492449090-8a9f3e10b6ec",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #E3F2FD, #EDE7F6)",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <style>
        {`
          .cause-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: none;
            background-color: #ffffff;
            border-radius: 12px;
          }
          .cause-card:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .btn-back {
            background-color: #1976D2 !important;
            color: white;
            border: none;
            border-radius: 6px;
          }
          .btn-back:hover {
            background-color: #1565C0 !important;
            transform: scale(1.05);
            transition: 0.2s;
          }
        `}
      </style>

      <h2
        className="text-center mb-5 fw-bold"
        style={{ color: "#283593", textShadow: "1px 1px 3px rgba(0,0,0,0.1)" }}
      >
        🌟 Our Causes
      </h2>

      <div className="container">
        {!selectedCause ? (
          <div className="row fade-in">
            {causes.map((cause, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  className="card shadow-sm h-100 cause-card"
                  style={{ cursor: "pointer", overflow: "hidden" }}
                  onClick={() => setSelectedCause(cause)}
                >
                  <img
                    src={cause.image}
                    className="card-img-top"
                    alt={cause.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="fw-bold"
                      style={{ color: "#283593", fontSize: "1.2rem" }}
                    >
                      {cause.title}
                    </h5>
                    <p style={{ color: "#555" }}>
                      {cause.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="card shadow-lg p-4 fade-in"
            style={{
              borderRadius: "12px",
              backgroundColor: "white",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <img
              src={selectedCause.image}
              alt={selectedCause.title}
              style={{
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ color: "#1976D2" }} className="fw-bold">
              {selectedCause.title}
            </h3>
            <p style={{ color: "#555", fontSize: "1.1rem" }}>
              {selectedCause.description}
            </p>
            <button
              className="btn btn-back mt-3"
              onClick={() => setSelectedCause(null)}
              style={{
                padding: "10px 20px",
              }}
            >
              ← Back to Causes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Causes;
