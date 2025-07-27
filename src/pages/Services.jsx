import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="p-8 bg-[#966639] text-[#e5e2d6]">
      {/* Services Section */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="text-2xl font-bold mb-4 inline-block border-b-4 border-[#e5e2d6] text-center mx-auto font-[Cinzel]">Wealth & Health Protection</h4>
            <ul className="list-disc pl-5 text-lg space-y-2 font-[Cinzel]">
              <li>Legacy & Retirement Planning</li>
              <li>Secure Savings & Growth Strategies</li>
              <li>Family Lifestyle Security</li>
              <li>College Funding Solutions</li>
              <li>Guaranteed Retirement Income</li>
            </ul>
          </div>

          {/* Testimonial Box */}
          <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow-md">
            <h5 className="text-xl text-center block font-bold mb-3 border-b-4 border-[#966639] font-[Cinzel]">Customer Feedback</h5>
            <p className="italic text-sm sm:text-base">
              “I’ve known Monitta for several years, and I know she is trustworthy, professional, and
              a helper by nature. She is knowledgeable in financial services and insurance coverage.
              She is patient when explaining and giving guidance on what would possibly be best for
              my family’s needs.” <br/>-Levitta W.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 border-b-4 border-[#e5e2d6] font-[Cinzel] text-center block">
              Legacy<br />Coaching
            </h4>
            <ul className="list-disc pl-5 text-lg space-y-2 font-[Cinzel]">
              <li>Faith-Based Financial Coaching</li>
              <li>Business Growth & <br/> Transition Planning</li>
              <li>Generational Wealth Strategies</li>
              <li>Personalized Retirement & Investment Plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#c5a468] text-[#000000] text-center py-10">
        <p className="text-xl font-[Cinzel]">Click below to schedule a consultation:</p>
        <Link
          to="/appointments"
          className="mt-6 inline-block bg-[#000000] text-[#f1d782] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#966639] transition">
          mwilliams@royallegacyfa.com
        </Link>
      </section>
    </div>
  );
}

export default Services;
