import ImageCarousel from '../components/ImageCarousel';
import slide1 from '../assets/award.jpg';
import slide2 from '../assets/agent.jpg';
import slide3 from '../assets/slide2-3.jpeg';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: slide1,
    captionTitle: 'Empowering Legacies',
    captionText: 'Guiding families to financial freedom and future wealth.',
    position: 'object-[center_100%]'
  },
  {
    image: slide2,
    captionTitle: 'Community First',
    captionText: 'Workshops and resources that impact generations.',
    position: 'object-[center_25%]'
  },
  {
    image: slide3,
    captionTitle: 'Award-Winning Expertise',
    captionText: 'Recognized leadership in financial education and services.',
    position: 'object-[center_50%]'
  },
];

function Home() {
  return (
    <section className="relative w-full">
      <ImageCarousel slides={slides} />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Text + CTA */}
     <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-20 px-6 sm:px-8 pb-16 font-[Cinzel] pointer-events-none">
        <h2 className="text-3xl sm:text-5xl font-bold text-earth-green drop-shadow-lg">
          Royal Legacy Financial Advisors
        </h2>
        <p className="mt-4 font-bold text-lg sm:text-2xl text-earth-light drop-shadow">
          Creating | Building | Shifting Legacy
        </p>
          <Link
            to="/appointments"
            className="mt-6 inline-block bg-[#f1d782] text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#c5a468] transition pointer-events-auto">
            Schedule a Consultation
          </Link>

          <Link
              to="/reviews"
              className="mt-4 inline-block bg-[#966639] text-[#e5e2d6] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#c5a468] transition pointer-events-auto"
            >
              Leave a Review
          </Link>
      </div>
    </section>
  );
}

export default Home;
