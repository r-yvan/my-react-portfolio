import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-10 font-body">
      <h2 className="text-4xl font-bold text-center mb-8">Let's Talk</h2>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="bg-gray-900 p-8 rounded shadow-lg w-64">
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li>LinkedIn: /linked</li>
            <li>GitHub: /rubuto-yvan</li>
            <li>Instagram: /mr_ivan011</li>
            <li>Discord: /ivan</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-8 rounded shadow-lg w-64">
          <h3 className="text-xl font-semibold mb-4">Contacts</h3>
          <p>Email: yvanirkley.rubuto@gmail.com</p>
          <p>Phone: +250788782635</p>
          <p>Location: Kigali, Rwanda</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
