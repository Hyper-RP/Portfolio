import React from 'react'
import '../styles.css'
function Contact() {
  return (
    <>
    {/* data-aos="fade-up" */}
      <section id="contact" className="py-12 text-center" > 
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all">Send</button>
      </form>
    </section>
    </>
  )
}

export default Contact
