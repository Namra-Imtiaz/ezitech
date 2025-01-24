import React from "react";

const SocialMediaCards = () => {
    return (
        <footer className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row ml-80 justify-between items-center mb-8 md:mb-16">
                    <p className="text-gray-500 text-sm md:text-base">
                        Still have a question? Browse{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            documentation
                        </a>{' '}
                        or{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            submit a ticket
                        </a>
                        .
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {
                            icon: "fab fa-linkedin-in fa-2x text-blue-700",
                            label: "Follow us on Linkedin",
                            description: "Latest news and updates",
                            link: "linkedin.com/company/eziline-technologies", 
                        },
                        {
                            icon: "fab fa-youtube fa-2x text-red-600",
                            label: "Follow Us on Youtube",
                            description: "Latest news and updates",
                            link: "https://www.youtube.com/@ezitechpk", 
                        },
                        {
                            icon: "fab fa-facebook-f fa-2x text-blue-800",
                            label: "Follow us on Facebook",
                            description: "Latest news and updates",
                            link: "facebook.com/ezitech", 
                        },
                        {
                            icon: "fab fa-whatsapp fa-2x text-green-600",
                            label: "WhatsApp Channel",
                            description: "Join the Community",
                            link: "https://www.whatsapp.com", 
                        },
                    ].map((item, index) => (
                        <div key={index} className="text-center relative group"> 
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300 block">
                                <div className="bg-gray-200 rounded-lg p-6 inline-block transform transition duration-300 group-hover:scale-110"> 
                                    <i className={item.icon}></i>
                                </div>
                                <p className="mt-4 font-medium">{item.label}</p>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </a>
                            {index < 3 && ( 
                                <div className="absolute top-1/2 -translate-y-1/2 right-0 h-16 w-px bg-gray-300 hidden md:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default SocialMediaCards;
