import { Sparkles, Mic, Users, CalendarDays } from 'lucide-react';
import speaking1 from '../assets/slide1.jpg';
import speaking2 from '../assets/slide4.jpg';
import speaking3 from '../assets/slide3.jpg';
import speaking4 from '../assets/group.jpg';

function Speaking() {
  const images = [speaking1, speaking2, speaking3, speaking4];

  return (
    <div className="bg-[#e5e2d6] text-[#000000] min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Hero */}
      <section className="max-w-4xl text-center mb-12 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#966639] mb-4">
          Book Dr. Monitta Williams
        </h2>
        <p className="text-lg sm:text-xl text-[#000000]">
          Inspiring audiences with wisdom, wealth-building tools, and faith-centered financial guidance.
        </p>
      </section>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={src}
              alt={`Speaking event ${idx + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Speaking Topics */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mb-16">
        <div className="bg-[#f1d782] p-6 rounded-lg shadow-md text-center">
          <Mic className="mx-auto h-8 w-8 text-[#000000]" />
          <h4 className="text-xl font-semibold mt-4 mb-2">Keynote Addresses</h4>
          <p>Custom messages on legacy, leadership, and financial empowerment.</p>
        </div>
        <div className="bg-[#c5a468] p-6 rounded-lg shadow-md text-center text-white">
          <Users className="mx-auto h-8 w-8" />
          <h4 className="text-xl font-semibold mt-4 mb-2">Workshops</h4>
          <p>Interactive faith-based financial workshops for groups & teams.</p>
        </div>
        <div className="bg-[#966639] p-6 rounded-lg shadow-md text-center text-white">
          <CalendarDays className="mx-auto h-8 w-8" />
          <h4 className="text-xl font-semibold mt-4 mb-2">Panels & Retreats</h4>
          <p>Professional insights at conferences, retreats, or community events.</p>
        </div>
        <div className="bg-[#000000] p-6 rounded-lg shadow-md text-center text-white">
          <Sparkles className="mx-auto h-8 w-8 text-[#f1d782]" />
          <h4 className="text-xl font-semibold mt-4 mb-2">Custom Engagements</h4>
          <p>We tailor sessions to meet your audience’s unique needs and goals.</p>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="text-center">
        <p className="text-lg mb-4">
          For bookings and availability, please email us at:
          <br />
          <strong className="text-[#966639]">speaking@royallegacy.com</strong>
        </p>
        <a
          href="mailto:speaking@royallegacy.com"
          className="inline-block bg-[#966639] hover:bg-[#c5a468] text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Request Booking
        </a>
      </section>
    </div>
  );
}

export default Speaking;
