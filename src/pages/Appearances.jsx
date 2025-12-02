import React from 'react';
import { Sparkles, Mic, Users, CalendarDays } from 'lucide-react';
import speaking1 from '../assets/speaking-retreat.jpg';
import speaking2 from '../assets/slide4.jpg';
import speaking3 from '../assets/slide3.jpg';
import speaking4 from '../assets/group.jpg';
import speaking5 from '../assets/Dr.Monitta_photo.jpg';
import { Link } from 'react-router-dom';

function Appearances() {
  const images = [speaking1, speaking2, speaking3, speaking4, speaking5];

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
    {
      icon: <Users className="mx-auto h-8 w-8" />,
      title: "Community Training",
      description: "Empowering churches and small business communities through financial literacy.",
      bg: "bg-[#6b5f4b] text-white",
    },
  ];

  return (
    <div className="bg-[#e5e2d6] text-[#000000] min-h-screen py-12 px-4 flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="max-w-4xl text-center mb-10 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#966639] mb-4 font-[Cinzel]">
          Creating, Building, and Shifting Legacy for Faith and Small Business
        </h2>
        <p className="text-lg sm:text-xl text-[#000000] opacity-90 font-[Cinzel]">
          Tailored financial empowerment and faith-centered legacy guidance for small businesses and churches.
        </p>
      </section>

      {/* IMAGES ROW (Desktop Only – unchanged) */}
      <div className="hidden sm:flex w-full justify-center mb-12">
        <div className="flex gap-6 px-4 min-w-max overflow-x-auto">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-[230px] h-[250px] rounded-lg shadow-lg overflow-hidden border-2 border-[#966639] shrink-0"
            >
              <img
                src={src}
                alt="Speaking engagement"
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ DESKTOP ONLY CARDS LAYOUT (3 top + 2 bottom) */}
      <div className="hidden sm:block w-full max-w-6xl mb-16 font-[Cinzel]">
        {/* Row 1 – 3 cards */}
        <div className="flex justify-center gap-6 px-2 overflow-x-auto mb-6">
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className={`${card.bg} w-[240px] p-6 rounded-xl shadow-md text-center shrink-0 hover:shadow-xl transition-all`}
            >
              {card.icon}
              <h4 className="text-xl font-semibold mt-4 mb-2">{card.title}</h4>
              <p className="opacity-90">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 – 2 cards */}
        <div className="flex justify-center gap-6 px-2 overflow-x-auto">
          {cards.slice(3, 5).map((card) => (
            <div
              key={card.title}
              className={`${card.bg} w-[240px] p-6 rounded-xl shadow-md text-center shrink-0 hover:shadow-xl transition-all`}
            >
              {card.icon}
              <h4 className="text-xl font-semibold mt-4 mb-2">{card.title}</h4>
              <p className="opacity-90">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW REMAINS UNCHANGED */}
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
            <div className={`mt-4 p-6 rounded-lg shadow-md text-center font-[Cinzel] ${cards[idx]?.bg}`}>
              {cards[idx]?.icon}
              <h4 className="text-xl font-semibold mt-4 mb-2">{cards[idx]?.title}</h4>
              <p>{cards[idx]?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOOKING CTA */}
      <section className="text-center font-[Cinzel]">
        <p className="text-lg mb-4">
          For bookings and availability:
          <br />
          <strong className="text-[#966639]">speaking@royallegacyfa.com</strong>
        </p>
        <Link
          to="/appearances-form"
          className="inline-block bg-[#966639] hover:bg-[#c5a468] text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Request an Appearance
        </Link>
      </section>

    </div>
  );
}

export default Appearances;
