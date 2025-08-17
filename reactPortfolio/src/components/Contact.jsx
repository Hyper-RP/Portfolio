import React, { useEffect, useState } from "react";
import "../styles.css";
import { toast } from "react-toastify";
import axios from "axios";
import { db } from "../config/firestore";
// import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc, getDocs } from "firebase/firestore";

const getData = async () => {
  const data = await getDocs(collection(db, "portfolio"));
  data.forEach((doc) => {
    console.log(doc.data());
  });
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    getData();
  }, []);

  async function writeUserData(e) {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "portfolio"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setFormData(() => ({
        name: "",
        email: "",
        message: "",
      }));
      toast.success("form submitted...");
      console.log("Document written with ID : " + docRef.id);
    } catch (e) {
      toast.error("something went wrong !!!");
      console.error("error to connect firestore : " + e);
    }
  }

  return (
    <>
      {/* data-aos="fade-up" */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form
          className="max-w-xl mx-auto space-y-4"
          onSubmit={(e) => writeUserData(e)}
        >
          <input
            type="text"
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
