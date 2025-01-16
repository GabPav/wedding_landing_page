import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Our wedding photos turned out absolutely stunning! Every moment was captured beautifully, and we couldn’t be happier with the results.",
      name: "Emma & Liam",
      role: "Happy Couple",
      image: "https://images.unsplash.com/photo-1490723186985-6d7672633c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D", // Replace with actual images
    },
    {
      id: 2,
      text: "The photographer was incredible! They made us feel so comfortable, and the candid shots are simply breathtaking. A true artist!",
      name: "Sophia & Ethan",
      role: "Bride & Groom",
      image: "https://images.unsplash.com/photo-1499568748556-acd2b350d187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvdXBsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D", // Replace with actual images
    },
    {
      id: 3,
      text: "Thank you for capturing our special day so perfectly! The photos are timeless, and we’ll treasure them forever. Highly recommend to anyone looking for a wedding photographer!",
      name: "Olivia & Noah",
      role: "Married Couple",
      image: "https://images.unsplash.com/photo-1489094889106-39069373d6ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvdXBsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDI%3D", // Replace with actual images
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl text-center mb-12 text-gray-600 font-poppins-300">
        What Our Couples Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
            <h3 className="text-base font-semibold text-gray-800 font-poppins">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
