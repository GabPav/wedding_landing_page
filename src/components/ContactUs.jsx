import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-8 md:px-32">
      <h2 className="text-4xl font-semibold mb-10 text-center font-poppins-300 text-gray-800">
        Contact Us
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">
            Let's Capture Your Special Moments
          </h3>
          <p className="text-gray-600">
            We would love to hear about your wedding plans and create
            unforgettable memories together! Feel free to get in touch with us
            through the form or the contact details below.
          </p>
          <div className="space-y-2">
            <p className="text-gray-800">
              📞 <span className="font-medium">+1 234 567 890</span>
            </p>
            <p className="text-gray-800">
              ✉️ <span className="font-medium">info@weddingphotos.com</span>
            </p>
            <p className="text-gray-800">
              📍 <span className="font-medium">123 Love Lane, Wedding City</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-lg p-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us about your dream wedding..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
