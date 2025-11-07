
import React, { useState } from 'react';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log('Form Submitted:', formData);
    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setFormStatus('submitted');
      setFormData({ fullName: '', email: '', phone: '', course: '', message: '' });

      // Reset form status after a few seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Start Your Journey Today</h2>
                <p className="text-lg text-gray-600 mt-4">
                    Ready to take the next step? Fill out the application form, and our admissions team will get in touch with you shortly. We can't wait to welcome you to our community.
                </p>
                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-blue-800"><strong className="font-semibold">Next enrollment period:</strong> Fall 2024. Applications are reviewed on a rolling basis.</p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
            {formStatus === 'submitted' ? (
                <div className="text-center py-10">
                    <h3 className="text-2xl font-semibold text-green-600">Thank You!</h3>
                    <p className="text-gray-700 mt-2">Your application has been received. We will be in touch soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Desired Course</label>
                    <select id="course" name="course" value={formData.course} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option value="" disabled>Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ux-ui-design">UX/UI Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about yourself</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 transition-colors duration-300">
                    {formStatus === 'submitting' ? 'Submitting...' : 'Apply Now'}
                    </button>
                </div>
                </form>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
