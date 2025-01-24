import React from "react";

const testimonials = [
  {
    name: "Raheel A.",
    role: "Game Dev.",
    text: "Early in my Game Development internship, and I’m already impressed by the mentorship and resources. Ezitech provides a fantastic environment to build real-world game development skills. Thank you!",
  },
  {
    name: "Anna S.",
    role: "Digital Marketing",
    text: "I’ve just started my Digital Marketing internship, and I’m already impressed by the in-depth mentorship and support from the team. Ezitech truly creates an ideal environment for growth in digital marketing.",
  },
  {
    name: "Qamar N.",
    role: "MERN Developer",
    text: "I’m still in the early stages of my MERN Stack internship, but I’m already impressed by the guidance and support from the mentors. Ezitech has exceeded my expectations. Thank you, Ezitech Institute!",
  },
  {
    name: "John D.",
    role: "Web Developer",
    text: "The environment and mentorship at Ezitech helped me achieve my professional goals. I’m thankful for the valuable experience I gained here.",
  },
  {
    name: "Sara T.",
    role: "App Developer",
    text: "Ezitech’s practical approach to learning allowed me to grow my skills and confidence in app development. Highly recommended!",
  },
  {
    name: "Emily R.",
    role: "UI/UX Designer",
    text: "Ezitech’s mentorship program has been instrumental in shaping my career. The resources and support are unparalleled.",
  },
  {
    name: "Ahmed K.",
    role: "Data Scientist",
    text: "Ezitech provides an excellent platform for growth and learning. Their hands-on approach ensures you are industry-ready!",
  },
];

const Testimonials = () => {
    return (
        <div className="relative overflow-hidden bg-gray-100 py-10">
          <h2 className="text-center text-3xl font-bold mb-6">Alumni 🎉</h2>
          <p className="text-center text-gray-600 mb-10">
            Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us.
          </p>
          <div className="w-full overflow-hidden">
            <div
              className="flex animate-scroll whitespace-nowrap gap-4"
              style={{ animation: "scroll 20s linear infinite" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                key={index}
                className="flex-shrink-0 w-96 bg-white border-solid border-black shadow-lg rounded-lg p-6 overflow-hidden"
              >
                <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{testimonial.role}</p>
                <p className="text-gray-700 text-sm text-wrap break-words leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
              
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
        </div>
      );
    };
export default Testimonials;