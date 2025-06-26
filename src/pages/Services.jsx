// function Services() {
//     return (
//       <div className="p-8">
//         {/* Services */}
//       <section className="bg-[#966639] text-[#e5e2d6] py-10 px-6">
//         <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
//           <div>
//             <h4 className="text-2xl font-bold mb-4">Life & Health Coverage</h4>
//             <ul className="list-disc pl-5 text-lg space-y-2">
//               <li>Final Expense</li>
//               <li>SAFE Investments</li>
//               <li>Lifestyle Protection</li>
//               <li>College Tuition Preparation</li>
//               <li>Retirement Income Guarantee</li>
//             </ul>
//           </div>

//           {/* Testimonial Box */}
//           <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow-md">
//             <h5 className="text-xl font-bold mb-3">Testimonial</h5>
//             <p className="italic text-sm sm:text-base">
//               “I’ve known Monitta for several years, and I know she is trustworthy, professional, and
//               a helper by nature. She is knowledgeable in financial services and insurance coverage.
//               She is patient when explaining and giving guidance on what would possibly be best for
//               my family’s needs.”
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Services */}
//       <section className="bg-[#966639] text-[#e5e2d6] py-10 px-6">
//         <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
//           <div>
//             <h4 className="text-2xl font-bold mb-4">Financial Guidance</h4>
//             <ul className="list-disc pl-5 text-lg space-y-2">
//               <li>Faith-Based Financial Coaching</li>
//               <li>Business Succession Planning</li>
//               <li>Wealth Building Strategies</li>
//               <li>Retirement & Investment Planning</li>
//             </ul>
//           </div>
//         </div>
//       {/* Responsive Testimonial Video */}
//           <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow-md max-w-5xl mx-auto ">
//             <h4 className="text-2xl font-bold mb-4 text-center">Customer Feedback</h4>
//             <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
//               <video
//                 controls
//                 className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg">
//                 <source src="/videos/testimonial.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </section>
//       </div>
      
//     );
//   }
  
//   export default Services;





import React, { useState } from 'react';
import Modal from 'react-modal';
import { PlayCircle, X } from 'lucide-react';
// import 'react-modal-video/css/modal-video.min.css';

Modal.setAppElement('#root');

function Services() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 bg-[#966639] text-[#e5e2d6]">
      {/* Services Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Life & Health Coverage */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Life & Health Coverage</h4>
            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>Final Expense</li>
              <li>SAFE Investments</li>
              <li>Lifestyle Protection</li>
              <li>College Tuition Preparation</li>
              <li>Retirement Income Guarantee</li>
            </ul>
          </div>

          {/* Testimonial Box */}
          <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow-md">
            <h5 className="text-xl font-bold mb-3">Testimonial</h5>
            <p className="italic text-sm sm:text-base">
              “I’ve known Monitta for several years, and I know she is trustworthy, professional, and
              a helper by nature. She is knowledgeable in financial services and insurance coverage.
              She is patient when explaining and giving guidance on what would possibly be best for
              my family’s needs.”
            </p>
          </div>

          {/* Financial Guidance */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Financial Guidance</h4>
            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>Faith-Based Financial Coaching</li>
              <li>Business Succession Planning</li>
              <li>Wealth Building Strategies</li>
              <li>Retirement & Investment Planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="bg-[#f1d782] text-[#000000] py-12 px-6 mt-12 text-center">
        <h4 className="text-2xl font-bold mb-6">Customer Feedback</h4>

        {/* Play Icon Trigger */}
        <div className="relative max-w-xl mx-auto cursor-pointer group" onClick={() => setIsOpen(true)}>
          <img
            src="/images/video-thumbnail.jpg" // Replace with real thumbnail
            alt="Video thumbnail"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <PlayCircle
            size={64}
            className="absolute inset-0 m-auto text-[#c5a468] drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Testimonial Video"
        closeTimeoutMS={300}
        className="modal-content"
        overlayClassName="modal-overlay">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 text-[#f1d782] hover:text-white transition">
          <X size={28} />
        </button>

        {/* Video */}
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
          <video
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg">
            <source src="/videos/testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
}

export default Services;

  