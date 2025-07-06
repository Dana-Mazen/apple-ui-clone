const Contact = () => {
  return (
    <div className="pt-42 px-6">
    <section id="contact" className=" py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mb-32"></div>
    </section>
    </div>
  );
};

export default Contact;
