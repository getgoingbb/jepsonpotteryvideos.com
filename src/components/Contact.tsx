import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useAnalytics } from './AnalyticsProvider';

const Contact = () => {
  const { trackPageView, trackContact, trackEvent } = useAnalytics();

  useEffect(() => {
    trackPageView('Contact', 'Contact Jepson Pottery Videos');
  }, [trackPageView]);

  const handleNewsletterSignup = () => {
    trackEvent('newsletter_signup', 'Engagement', 'Newsletter Button');
    trackContact('newsletter', 'newsletter');
    // FIXED: Updated to correct Mailchimp URL
    window.open('https://never-leave-the-playground.mailchimpsites.com/', '_blank');
  };

  const handleContactForm = () => {
    trackEvent('contact_form', 'Engagement', 'Contact Form Button');
    trackContact('form', 'contact_form');
    // FIXED: Link to Mailchimp contact form
    window.open('https://never-leave-the-playground.mailchimpsites.com/', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const subject = formData.get('subject') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Track form submission
    trackContact('form', subject.toLowerCase().replace(/\s+/g, '_'));
    trackEvent('form_submit', 'Contact', subject);
    
    // FIXED: Email Stephen directly
    const emailAddress = 'stephen@jepsonpotteryvideos.com';
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.open(mailtoLink);
  };

  const handlePhoneCall = () => {
    trackContact('phone', 'general');
    trackEvent('phone_call', 'Contact', '(407) 349-5587');
    window.open('tel:407-349-5587');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contact Stephen Jepson for pottery classes, video series information, or personalized pottery instruction in Geneva, Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Subject</option>
                  <option value="Video Series">Video Series Purchase</option>
                  <option value="Pottery Classes">Pottery Classes</option>
                  <option value="Personalized Instruction">Personalized Instruction</option>
                  <option value="Workshop Inquiry">Workshop Inquiry</option>
                  <option value="Custom Pottery">Custom Pottery Order</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your pottery interests, experience level, and what you'd like to learn..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                Messages go directly to stephen@jepsonpotteryvideos.com
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Stephen Jepson</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-300">
                    Jepson Pottery Videos<br />
                    Geneva, Florida
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-gray-300">
                    <button 
                      onClick={handlePhoneCall}
                      className="hover:text-amber-300 transition-colors duration-200 underline"
                    >
                      (407) 349-5587
                    </button>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Call Stephen directly for pottery classes
                  </p>
                </div>
              </div>

              {/* FIXED: Replaced Email with Contact Form Button */}
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contact Form</h4>
                  <button
                    onClick={handleContactForm}
                    className="text-amber-300 hover:text-amber-200 transition-colors duration-200 flex items-center underline"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Online Contact Form
                  </button>
                  <p className="text-sm text-gray-400 mt-1">
                    Submit inquiries through our online form
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <ExternalLink size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Check Availability / Newsletter</h4>
                  <button
                    onClick={handleNewsletterSignup}
                    className="text-amber-300 hover:text-amber-200 transition-colors duration-200 flex items-center underline"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Check Availability / Newsletter Signup
                  </button>
                  <p className="text-sm text-gray-400 mt-1">
                    Get notified about new pottery content and classes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Services Available</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>• Pottery Video Series ($29.99)</p>
                    <p>• Personalized Pottery Classes</p>
                    <p>• Workshop Instruction</p>
                    <p>• Custom Pottery Orders</p>
                    <p>• Large Scale Pottery Training</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Stay Connected</h4>
              <p className="text-amber-100 mb-4">
                Join our newsletter for pottery tips, new video announcements, and class updates.
              </p>
              <button
                onClick={handleNewsletterSignup}
                className="bg-white text-amber-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Join Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;