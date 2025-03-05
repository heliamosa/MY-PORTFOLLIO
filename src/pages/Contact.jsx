import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Function to validate fields
  const validate = (name, value) => {
    if (!value) return "This field is required.";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) return "Invalid email address.";
    return "";
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle field validation on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are valid
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Message Sent! (Backend integration needed)");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any inquiries or collaborations!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        {["name", "email", "message"].map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors[field] && <p className="error-message">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Send Message</button>
      </form>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Other Ways to Connect</h3>
        <p>📧 Email: <a href="mailto:heliamosayebian@yahoo.com">heliamosayebian@yahoo.com</a></p>
        <p>📞 Phone: <a href="tel:+19712123517">+1 971-212-3517</a></p>
        <p>🔗 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>💻 GitHub: <a href="https://github.com/heliamosa" target="_blank" rel="noopener noreferrer">github.com/heliamosa</a></p>
      </div>
    </section>
  );
}

export default Contact;
