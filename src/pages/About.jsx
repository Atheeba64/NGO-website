import React from 'react';

function About() {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Header Banner */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509099836639-18ba1795216d')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 className="fw-bold">About Us</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
          Creating hope, changing lives, and building a brighter future for communities in need.
        </p>
      </div>

      {/* Intro Section */}
      <div className="container py-5" style={{ color: '#333' }}>
        <p
          className="text-center fs-5 mb-5"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}
        >
          At <strong>NGO Hope</strong>, we believe that every individual deserves access to education, healthcare, and
          sustainable livelihood opportunities. Since our inception, we have worked tirelessly to uplift underprivileged
          communities and create a world where everyone can thrive with dignity and hope.
        </p>

        {/* Mission / Vision */}
        <div className="row text-center mb-5">
          <div className="col-md-6 mb-4">
            <div
              className="p-4 shadow rounded h-100"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="fw-bold" style={{ color: '#16a085' }}>Our Mission</h4>
              <p style={{ lineHeight: '1.6' }}>
                To empower communities through education, healthcare, and skill development, enabling them to break the
                cycle of poverty and achieve self-reliance.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="p-4 shadow rounded h-100"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1497493292307-31c376b6e479')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="fw-bold" style={{ color: '#2980b9' }}>Our Vision</h4>
              <p style={{ lineHeight: '1.6' }}>
                A world where equal opportunities are accessible to all, fostering a society built on compassion, equality,
                and shared progress.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src="https://img.icons8.com/ios-filled/100/27ae60/clock--v1.png"
              alt="Years"
              className="mb-2"
            />
            <h3 style={{ color: '#27ae60' }}>10+</h3>
            <p>Years of Service</p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://img.icons8.com/ios-filled/100/e67e22/group.png"
              alt="Lives"
              className="mb-2"
            />
            <h3 style={{ color: '#e67e22' }}>50,000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://img.icons8.com/ios-filled/100/8e44ad/checked--v1.png"
              alt="Projects"
              className="mb-2"
            />
            <h3 style={{ color: '#8e44ad' }}>100+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
