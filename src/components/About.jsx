import React from "react";

const About = () => {
  return (
    <section className="about-section py-20 px-8 md:px-32 text-center">
      <h2 className="text-4xl font-semibold mb-6 font-poppins-300 text-gray-600">About Us</h2>
      
      <blockquote className="text-3xl italic text-gray-700 mb-8 mx-auto max-w-3xl font-great-vibes">
        Your love, quietly captured.
      </blockquote>

      
      <p className="text-lg text-gray-700 mb-8 font-poppins-300">
      Our mission is to capture your most beautiful moments in a way that tells a timeless story. As a team of passionate photographers, we specialize in capturing intimate, candid, and emotional moments that truly reflect the love between you and your partner.
      </p>
      
      <p className="text-lg text-gray-700 mb-8 font-poppins-300">
        Every couple's story is unique, and I take great pride in documenting those special moments in a way that feels authentic and meaningful. Let's make your day unforgettable.
      </p>
      
      <button className="bg-gray-500 text-white px-6 py-3 rounded-md text-xl font-poppins-300 hover:bg-gray-600 transition duration-300">
        Contact Us
      </button>
    </section>
  );
};

export default About;
