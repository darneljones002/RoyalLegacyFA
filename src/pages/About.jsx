import React, {useState} from 'react';
import headshot from '../assets/slide2-5.jpg';
import headshot1 from '../assets/slide2-1.jpeg';
import { PlayCircle, X } from 'lucide-react';
import Modal from 'react-modal';

// import awardPhoto from '../assets/award.jpg';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#e5e2d6] text-[#000000] font-sans">
      {/* Header */}
      <section className="py-10 px-6 text-center bg-[#f1d782]">
        <img
          src={headshot}
          alt="Monitta speaking"
          className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-[#c5a468] shadow-md"
        />
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-[#000000]">Dr. Monitta Williams</h2>
        <p className="text-lg sm:text-xl mt-2 text-[#966639]">
          Multi-Award Winning Financial Professional & Educator
        </p>
        <blockquote className="mt-6 italic text-[#000000] max-w-3xl mx-auto">
          “Helping working professionals & new families focus on creating a financially secure foundation.”
        </blockquote>
      </section>

      {/* Main Content */}
      <section className="grid md:grid-cols-2 gap-8 px-6 py-12 max-w-6xl mx-auto items-start">
        <div>
          <h3 className="text-2xl font-bold text-[#966639] mb-4 border-l-4 border-[#c5a468] pl-4">
            Meet the Agent
          </h3>
          <p className="text-lg leading-relaxed">
              Dr. Monitta Williams is a seasoned financial professional, licensed in 13 states, with a passion for empowering individuals, 
              families, and small businesses to build lasting legacies. She is the founder of Royal Legacy Financial Advisors, where she 
              specializes in financial literacy, wealth building, and legacy planning. With a heart for service and a commitment to excellence, 
              Dr. Williams combines her professional expertise with a personal mission to help clients achieve financial independence and long-term security. 
          </p>
          <p className="mt-4 text-lg italic text-[#966639] font-medium">
            “Financial professional licensed in 13 states, founder of Royal Legacy Financial Advisors, 
            helping families and businesses build lasting financial legacies.”
          </p>
          <br/>
          <p className="text-lg leading-relaxed">
              Her approach is rooted in integrity, stewardship, and faith, offering guidance that aligns with both financial goals and core values. Beyond her professional work, 
              Dr. Williams is a sought-after speaker and educator who regularly provides financial literacy training to communities and churches. Her vision is clear: to inspire generational 
              change by equipping others with the tools and knowledge needed to take control of their financial future and leave a meaningful legacy.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 gap-4">
          {/* <img src={awardPhoto} alt="Award ceremony" className="rounded-lg shadow-lg" /> */}
          <img src={headshot1} alt="Community event" className="rounded-lg shadow-lg" />
        </div>
      </section>
       {/* Testimonial Video Section */}
      <section className="bg-[#c5a468] text-[#000000] py-12 px-6 mt-12 text-center">
        <h4 className="text-2xl font-bold mb-6">Client Testimony</h4>

        {/* Play Icon Trigger */}
        <div className="relative max-w-xl mx-auto cursor-pointer group" onClick={() => setIsOpen(true)}>
          <img
            src="" 
            alt=""
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <PlayCircle
            size={64}
            className="absolute inset-0 m-auto text-[#f1d782] drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
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
        <div className="w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen relative z-0 rounded-lg overflow-hidden">
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

export default About;