import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import slide1 from '../assets/award.jpg';
import slide2 from '../assets/agent.jpg';
import slide3 from '../assets/slide2-3.jpeg';
import slide4 from '../assets/Dr.Monitta_photo.jpg';


function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = isMobile
    ? [
        {
          image: slide2,
          captionTitle: 'Community First',
          captionText: 'Workshops and resources that impact generations.',
          position: 'object-[center_40%] sm:object-[center_25%]',
        },
      ]
    : [
        {
          image: slide4,
          captionTitle: 'Cultural Impact',
          captionText: 'Walk by Faith not by Site',
          position: 'object-[center_40%] sm:object-[center_45%]',
        },
        {
          image: slide1,
          captionTitle: 'Empowering Legacies',
          captionText: 'Guiding families to financial freedom and future wealth.',
          position: 'object-[center_40%] sm:object-[center_100%]',
        },
        {
          image: slide2,
          captionTitle: 'Community First',
          captionText: 'Workshops and resources that impact generations.',
          position: 'object-[center_40%] sm:object-[center_25%]',
        },
        {
          image: slide3,
          captionTitle: 'Award-Winning Expertise',
          captionText: 'Recognized leadership in financial education and services.',
          position: 'object-[center_40%] sm:object-[center_50%]',
        },
      ];

  return (
    <section className="w-full">
      {/* Carousel Container */}
      <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen">
        <ImageCarousel slides={slides} />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        {/* Text + CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-20 px-4 sm:px-8 pb-10 sm:pb-16 font-[Cinzel] pointer-events-none">
          <h2 className="text-3xl sm:text-5xl font-bold text-earth-green drop-shadow-lg">
            Royal Legacy Financial Advisors
          </h2>
          <p className="mt-4 font-bold text-lg sm:text-2xl text-earth-light drop-shadow">
            Creating | Building | Shifting Legacy
          </p>
          <Link
            to="/appointments"
            className="mt-6 inline-block bg-[#f1d782] text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#c5a468] transition pointer-events-auto"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/reviews"
            className="mt-4 inline-block bg-[#966639] text-[#e5e2d6] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#c5a468] transition pointer-events-auto"
          >
            Leave a Review
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
