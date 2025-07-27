import { Sparkles, Mic, Users, CalendarDays } from 'lucide-react';
import speaking1 from '../assets/speaking-retreat.jpg';
import speaking2 from '../assets/slide4.jpg';
import speaking3 from '../assets/slide3.jpg';
import speaking4 from '../assets/group.jpg';

function Speaking() {
  const images = [speaking1, speaking2, speaking3, speaking4];
  const cards = [
    {
      icon: <Sparkles className="mx-auto h-8 w-8 text-[#f1d782]" />,
      title: "Custom Engagements",
      description: "We tailor sessions to meet your audience’s unique needs and goals.",
      bg: "bg-[#000000] text-white",
    },
    {
      icon: <Mic className="mx-auto h-8 w-8 text-[#000000]" />,
      title: "Keynote Addresses",
      description: "Custom messages on legacy, leadership, and financial empowerment.",
      bg: "bg-[#f1d782] text-[#000000]",
    },
    {
      icon: <CalendarDays className="mx-auto h-8 w-8" />,
      title: "Conferences & Retreats",
      description: "Professional insights at conferences, retreats, or community events.",
      bg: "bg-[#966639] text-white",
    },
    {
      icon: <Users className="mx-auto h-8 w-8" />,
      title: "Workshops",
      description: "Interactive faith-based financial workshops for groups & teams.",
      bg: "bg-[#c5a468] text-white",
    },
  ];

  return (
    <div className="bg-[#e5e2d6] text-[#000000] min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Hero */}
      <section className="max-w-4xl text-center mb-12 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#966639] mb-4 font-[Cinzel]">
           Let Royal Legacy Inspire and Equip Your Audience
        </h2>
        <p className="text-lg sm:text-xl text-[#000000] font-[Cinzel]">
          Inspiring audiences with wisdom, wealth-building tools, and faith-centered financial guidance.
        </p>
      </section>

      {/* Responsive Image + Card Pairing */}
      <div className="block sm:hidden w-full max-w-xl">
        {images.map((src, idx) => (
          <div key={idx} className="mb-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Speaking event ${idx + 1}`}
                className="w-full h-64 object-cover object-top"
              />
            </div>
            <div className={`mt-4 p-6 rounded-lg shadow-md text-center font-[Cinzel] ${cards[idx].bg}`}>
              {cards[idx].icon}
              <h4 className="text-xl font-semibold mt-4 mb-2">{cards[idx].title}</h4>
              <p>{cards[idx].description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src={src}
              alt={`Speaking event ${idx + 1}`}
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 gap-8 max-w-5xl mb-16 font-[Cinzel]">
        {cards.map((card, idx) => (
          <div key={idx} className={`${card.bg} p-6 rounded-lg shadow-md text-center`}>
            {card.icon}
            <h4 className="text-xl font-semibold mt-4 mb-2">{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="text-center font-[Cinzel]">
        <p className="text-lg mb-4">
          For bookings and availability, please email us at:
          <br />
          <strong className="text-[#966639]">speaking@royallegacyfa.com</strong>
        </p>
        <a
          href="mailto:speaking@royallegacyfa.com"
          className="inline-block bg-[#966639] hover:bg-[#c5a468] text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Request Booking
        </a>
      </section>
    </div>
  );
}

export default Speaking;
