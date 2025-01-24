import React from 'react'
import Hero from '../components/Hero'
import Marque from '../components/Marque'
import WhatWeDo from '../components/WhatWeDo'
import AnimatedCards from '../components/AnimatedCards'
import Testimonials from '../components/Testimonials'
import SocialMediaCards from '../components/SocialMediaCards'
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <>

      {/* hero section */}
      <Hero />

      {/* technologies */}
      <Marque />

      {/* steps section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Shaping and Empowering Future IT Talent
            </h2>
            <p className="text-lg text-gray-600">Through a Seamless Process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-9xl text-gray-200 font-bold mb-4 relative">
                1
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                  STEP 1
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Discover Tech
              </h3>
              <p className="text-gray-600">
                Explore internships across various technologies that align with your
                career goals. Start your journey by selecting a field that excites
                you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-9xl text-gray-200 font-bold mb-4 relative">
                2
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                  STEP 2
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Evaluate Skill
              </h3>
              <p className="text-gray-600">
                Our process includes an interview and a short evaluation task to
                assess your skills and readiness, helping us match you with the
                right opportunity.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-9xl text-gray-200 font-bold mb-4 relative">
                3
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                  STEP 3
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Track Record
              </h3>
              <p className="text-gray-600">
                Once selected, gain access to our iPortal to monitor your
                internship progress, track your achievements, and stay on top of
                your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <WhatWeDo />

      {/* Hundreds of Successful Internships & Countings */}
      <section>
        <div className="bg-gradient-to-r from-white to-gray-50 py-16 px-6 md:px-20 lg:px-32">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Hundreds of Successful Internships & Countings
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                With a commitment to quality training and career advancement, we've
                empowered students from diverse backgrounds. Through structured
                internship, hands-on projects, and expert mentorship, Ezitech
                Institute ensures that every student builds a solid foundation in IT.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-500">37+</h3>
                <p className="mt-2 text-gray-600">Industry MoUs</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-500">327</h3>
                <p className="mt-2 text-gray-600">Active Students</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-500">98%</h3>
                <p className="mt-2 text-gray-600">Positive Feedback</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-500">6,663</h3>
                <p className="mt-2 text-gray-600">Successful Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* domains */}
      <AnimatedCards />

      {/* testimonials */}
      <Testimonials />

      {/* social links */}
      <SocialMediaCards />

      {/* get started card */}
      <GetStarted />

    </>
  )
}

export default Home