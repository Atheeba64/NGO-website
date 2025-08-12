import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    skills: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for volunteering! We will reach out to you soon.");
    setForm({
      name: "",
      email: "",
      phone: "",
      interest: "",
      availability: "",
      skills: "",
      message: "",
    });
  };

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#f9fafc", borderRadius: "8px" }}
    >
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Volunteer"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6">
          <h2 className="text-center mb-4" style={{ color: "#1b4965" }}>
            Volunteer With Us
          </h2>
          <p className="text-muted text-center mb-4">
            Join our mission to make the world a better place. Fill in your
            details below, and our team will connect with you soon.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              className="form-control mb-3"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <select
              className="form-control mb-3"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
            >
              <option value="">Area of Interest</option>
              <option value="Teaching">Teaching</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Event Support">Event Support</option>
              <option value="Community Outreach">Community Outreach</option>
            </select>
            <input
              className="form-control mb-3"
              name="availability"
              value={form.availability}
              onChange={handleChange}
              placeholder="Availability (e.g., Weekends, Evenings)"
              required
            />
            <textarea
              className="form-control mb-3"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Skills or Experience"
              rows="2"
              required
            ></textarea>
            <textarea
              className="form-control mb-3"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Why do you want to volunteer?"
              rows="4"
              required
            ></textarea>
            <button
              className="btn w-100"
              style={{
                backgroundColor: "#1b4965",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerForm;
