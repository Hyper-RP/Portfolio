import React, { useEffect, useState } from "react";
import "../styles.css";
import { toast } from "react-toastify";
import axios from 'axios'; 
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  


  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, [formData]);

  function submitHandler(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/submitForm",{email:formData.email,message:formData.message,name:formData.name})
        .then(()=>{toast.success("form submitted...")})
        .catch(()=>{toast.error("something went wrong !!!")})
    setFormData(()=>({
      name:"",
      email:"",
      message:""
    }))
  }

  return (
    <>
      {/* data-aos="fade-up" */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form
          className="max-w-xl mx-auto space-y-4"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev)=>({
                ...prev,name:e.target.value
              }));
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
             onChange={(e) => {
              setFormData((prev)=>({
                ...prev,email:e.target.value
              }));
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={formData.message}
             onChange={(e) => {
              setFormData((prev)=>({
                ...prev,message:e.target.value
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
