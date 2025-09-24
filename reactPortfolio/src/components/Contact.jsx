import React, { useContext, useEffect} from "react";
import "../styles.css";
// import axios from "axios";
// import { getDatabase, ref, set } from "firebase/database";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { form } from "framer-motion/client";
import { portfolioContext } from "../Context/Portfolio";
import { toast } from "react-toastify";

function Contact() {
  const {
    formData,
    setFormData,
    writeUserData,
    guess,
    gender,
    nameIdentifier,
    nameMap,
    downloadPermission,
    requiredHandler
  } = useContext(portfolioContext);

  useEffect(() => {
    if (!formData.name) return;
    const timer = setTimeout(() => {
      guess();
      nameIdentifier();
      // console.log("name : "+formData.name);
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData.name]);
  
  return (
    <>
      {/* data-aos="fade-up" */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-serif text-[#0000007e] font-bold mb-6">Don't Be a Stranger.</h2>
        <form
          className="max-w-xl mx-auto space-y-4"
          onSubmit={(e) => writeUserData(e)}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            name="email"
            
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            name="message"
            onChange={(e) => {

              setFormData((prev) => ({
                ...prev,
                message: e.target.value,
              }));
            }}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
