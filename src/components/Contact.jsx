import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import {
  FaFacebookF,
  FaUser,
  FaTag,
  FaRegCommentDots,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const CONTACT_INFO = [
  { icon: MdEmail, label: "Email", value: "shajidaislam34@gmail.com" },
];

const Contact = () => {
  const address = "Narayanganj, Dhaka, Bangladesh";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS credentials from .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Check if env variables are loaded
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    // Check if credentials are missing
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email configuration is missing. Please contact the site owner.", {
        duration: 4000,
        position: "top-center",
      });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.comment,
      to_email: "shajidaislam34@gmail.com",
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("EmailJS Response:", response);

      toast.success("Message sent successfully! 📧", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#10b981",
          color: "#fff",
          padding: "16px",
          borderRadius: "10px",
          fontSize: "16px",
        },
      });

      setFormData({ name: "", email: "", subject: "", comment: "" });
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      toast.error(`Failed to send: ${error.text || error.message || "Please try again"}`, {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "10px",
          fontSize: "16px",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ name, type = "text", placeholder, icon: Icon }) => (
    <div className="relative w-full">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-lg py-2 sm:py-3 px-9 sm:px-10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300 text-sm sm:text-base"
        required
      />
    </div>
  );

  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-purple-600">Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text mb-3 sm:mb-4">
            Contact Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* LEFT PANEL */}
          <div className="lg:w-1/3 space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Location Map"
                src={mapUrl}
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-semibold text-purple-600 border-b border-gray-200 pb-3">
                Get in Touch
              </h3>

              {CONTACT_INFO.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 shrink-0 mt-1" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex items-start space-x-3 sm:space-x-4 pt-4 border-t border-gray-200">
                <SlLocationPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Address</p>
                  <p className="text-sm sm:text-base font-medium text-gray-800">
                    {address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  Follow Me
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition"
                  >
                    <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>

                  <Link
                    to="https://www.linkedin.com/in/shajida-akter-lopa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL – FORM */}
          <div className="lg:w-2/3 bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              If you have any <span className="text-purple-600">project</span>{" "}
              or need help, <span className="text-purple-600">Contact me</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField name="name" placeholder="Your Name" icon={FaUser} />
                <InputField
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  icon={MdEmail}
                />
              </div>

              <InputField name="subject" placeholder="Subject" icon={FaTag} />

              <div className="relative">
                <FaRegCommentDots className="absolute left-3 top-4 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <textarea
                  name="comment"
                  placeholder="Your Comment"
                  rows="6"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-lg py-2 sm:py-3 pl-9 sm:pl-10 pr-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition resize-none text-sm sm:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
