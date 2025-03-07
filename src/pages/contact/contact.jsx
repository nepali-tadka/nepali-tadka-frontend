import React, { useState } from "react";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/input-field";
import TextareaField from "../../components/textarea-field/textarea-field";
import { sendEmail } from "../../services/email.service";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.subject) tempErrors.subject = "Subject is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        toast.info("Sending email...");
        await sendEmail(formData);
        toast.success("Email sent successfully!");
        // reset form data after email is sent
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        toast.error("Failed to send email. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We are ready to help you prepare the dish of your choice. Get in touch.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />
        <TextareaField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;
