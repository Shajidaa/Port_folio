import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { FiDownload } from "react-icons/fi";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  { icon: MdEmail, label: "Email", value: "shajidaislam34@gmail.com", link: "mailto:shajidaislam34@gmail.com" },
];

const Contact = () => {
  const address = "Narayanganj, Dhaka, Bangladesh";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;
const handleResumeClick = () => {
    toast.success("Resume download started! 📄", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#9333ea",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#9333ea",
      },
    });
  };
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Location Map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-6">
              Get in Touch
            </h3>

            {/* Email */}
            {CONTACT_INFO.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <item.icon className="h-6 w-6 text-purple-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                  <p className="text-base font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Address */}
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <SlLocationPin className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-base font-medium text-gray-800">{address}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex flex-row justify-start items-center space-x-4">
                <a
                  href="https://github.com/Shajidaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shajida-akter-lopa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61564677698432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full transition-all hover:scale-110"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                 {/* Download Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/uc?export=download&id=19AytXCcQ9LebUKAEHFxeLbOOQy-chz85"
              download
              onClick={handleResumeClick}
              className="btn btn-outline 
            btn-sm border-purple-500 text-purple-600
             hover:bg-purple-600 hover:text-white flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
