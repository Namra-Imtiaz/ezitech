import React from "react";

const AnimatedCards = () => {
  const cards = [
    {
      title: "App Development",
      description:
        "We offer hands-on experience to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic.",
      icon: "📱", 
      color: "bg-pink-50", 
    },
    {
      title: "Artificial Intelligence",
      description:
        "Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges.",
      badge: "EXCLUSIVE",
      icon: "🤖", 
      color: "bg-pink-50",
    },
    {
      title: "Web Development",
      description:
        "Exceptional web experiences engage, inspire, and drive results – all built on a foundation of strategic, innovative design.",
      icon: "💻", 
      color: "bg-purple-50", 
    },
    {
      title: "Graphics Design",
      description:
        "Your journey to becoming a skilled graphic designer. Wherever your creativity is headed, we provide the inspiration, tools, and support to help you bring your vision to life.",
      icon: "🎨", 
      color: "bg-purple-50", 
    },
    {
      title: "2d/3d Architecture",
      description:
        "We’re mentors, guides, and partners in your journey to becoming a game developer. Wherever your passion leads, we provide the skills, tools, and support to help you bring your game ideas to life.",
      icon: "🏗️", 
      color: "bg-blue-50", 
    },
    {
      title: "Digital Marketing",
      description:
        "We’re mentors, guides, and partners in your journey to mastering digital marketing. Wherever your career goals lead, we provide the knowledge, tools, and support to help you drive impactful marketing strategies.",
      badge: "NEW",
      icon: "📈", 
      color: "bg-blue-50", 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white py-16 px-8 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative ${card.color} shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl`}
          >

            {card.badge && (
              <span className="absolute top-4 right-4 bg-purple-20 text-white text-xs font-bold px-2 py-1 rounded">
                {card.badge}
              </span>
            )}

            <div className="text-5xl mb-4">{card.icon}</div>
 
            <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>

            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
