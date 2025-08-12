import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
        <div className="container position-relative">
          <h1 className="display-3 fw-bold">Welcome to NGO Hope</h1>
          <p className="lead mb-4">
            Empowering lives, inspiring hope, and making the world a better place.
          </p>
          <a href="/volunteer" className="btn btn-primary btn-lg shadow">
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">What We Do</h2>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 hover-card">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Education"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Education for All</h5>
                  <p className="card-text">
                    We provide educational resources and training to
                    underprivileged children, opening doors to a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 hover-card">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Healthcare"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Healthcare Support</h5>
                  <p className="card-text">
                    Offering free medical camps, health awareness programs, and
                    assistance for the needy.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 hover-card">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Community"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Community Development</h5>
                  <p className="card-text">
                    Building sustainable communities through skills training,
                    livelihood programs, and support networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2 className="fw-bold mb-4">Join Us in Making a Difference</h2>
          <a href="/volunteer" className="btn btn-light btn-lg shadow">
            Get Involved
          </a>
        </div>
      </section>

      {/* Custom Styles */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </>
  );
}

export default Home;
