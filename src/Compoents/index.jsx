
import React from 'react';
import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gov-blue text-white py-12 md:py-20">
          <div className="gov-container">
            <div className="text-center max-w-3xl mx-auto stagger-animation">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Festival Permits Self-Service Portal</h1>
              <p className="text-lg md:text-xl mb-8">
                Apply online for Ganpati and Durga Puja celebration permits with automated fee calculation and real-time status tracking.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#application-form" className="bg-white text-gov-blue hover:bg-gray-100 transition-colors duration-300 font-medium py-3 px-6 rounded-sm text-center">
                  Apply for Permit
                </a>
                <Link to="/application-status" className="bg-transparent hover:bg-blue-700 transition-colors duration-300 border border-white text-white font-medium py-3 px-6 rounded-sm text-center">
                  Track Application
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gov-darkblue">How It Works</h2>
              <p className="text-gray-600 mt-2">Simple steps to apply for your festival permit</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="gov-card text-center">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gov-blue">1</span>
                </div>
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">Fill Application</h3>
                <p className="text-gray-600">
                  Complete the online form with details about pandal dimensions, duration, and sound system requirements.
                </p>
              </div>
              
              <div className="gov-card text-center">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gov-blue">2</span>
                </div>
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">Pay Fees</h3>
                <p className="text-gray-600">
                  Review automatically calculated fees based on your requirements and complete the payment.
                </p>
              </div>
              
              <div className="gov-card text-center">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gov-blue">3</span>
                </div>
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">Receive Approval</h3>
                <p className="text-gray-600">
                  Track your application status online and receive your permit via email once approved.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gov-darkblue">Benefits</h2>
              <p className="text-gray-600 mt-2">Why use our online permit system</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm flex">
                <div className="mr-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gov-darkblue mb-2">Faster Processing</h3>
                  <p className="text-gray-600">
                    Get your approvals faster with our streamlined online process compared to traditional methods.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm flex">
                <div className="mr-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gov-darkblue mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">
                    Apply anytime, anywhere without waiting in lines or visiting multiple offices.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm flex">
                <div className="mr-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gov-darkblue mb-2">Transparent Fees</h3>
                  <p className="text-gray-600">
                    See exactly how fees are calculated based on your specific requirements with no hidden charges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm flex">
                <div className="mr-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gov-darkblue mb-2">Real-time Updates</h3>
                  <p className="text-gray-600">
                    Receive SMS and email notifications about your application status at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Form Section */}
        <section id="application-form" className="py-16 bg-white">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gov-darkblue">Apply For Permit</h2>
              <p className="text-gray-600 mt-2">Complete the form below to apply for your festival permit</p>
            </div>
            
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gov-darkblue">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Find answers to common questions about festival permits</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">How long does the approval process take?</h3>
                <p className="text-gray-600">
                  The approval process typically takes 3-5 working days, depending on the complexity of your application and the current volume of requests.
                </p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">What documents do I need to submit?</h3>
                <p className="text-gray-600">
                  You need to provide proof of identity, location details, and a basic design layout of your pandal. Additional documents may be required based on your specific requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">Can I modify my application after submission?</h3>
                <p className="text-gray-600">
                  Minor modifications can be made by contacting our support team with your application ID. Major changes may require a new application.
                </p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-gov-darkblue mb-2">What are the sound system restrictions?</h3>
                <p className="text-gray-600">
                  Sound systems must comply with local noise regulations, typically limited to 75dB during daytime (6 AM - 10 PM) and 45dB during nighttime. Additional restrictions apply in residential areas.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/guidelines" className="inline-flex items-center text-gov-blue hover:text-gov-darkblue font-medium">
                View more FAQs
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gov-blue text-white">
          <div className="gov-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Apply for Your Festival Permit?</h2>
              <p className="text-lg mb-8">
                Complete your application in minutes and get faster approvals through our streamlined process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#application-form" className="bg-white text-gov-blue hover:bg-gray-100 transition-colors duration-300 font-medium py-3 px-6 rounded-sm text-center">
                  Apply Now
                </a>
                <Link to="/guidelines" className="bg-transparent hover:bg-blue-700 transition-colors duration-300 border border-white text-white font-medium py-3 px-6 rounded-sm text-center">
                  Read Guidelines
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Index;