import React from 'react';

const GetStarted = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-12 md:p-20 flex flex-col md:flex-row items-center justify-between mx-4 my-8 md:mx-16">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to get started?</h2>
                <p className="text-gray-600 leading-relaxed">
                    At Ezitech, we constantly push boundaries to deliver excellence.<br />
                    Our commitment to quality and innovation makes us your trusted<br />
                    partner for growth and success.
                </p>
            </div>
            <div className="md:w-1/3 relative"> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    GET STARTED NOW
                </button>
                <div className="absolute -right-10 -bottom-8 w-24 h-24 bg-transparent" style={{ transform: 'rotate(15deg)' }}>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 88.0001L88.0001 11.9999M12 12L88 88" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 44L44 12M56 88L88 56" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;