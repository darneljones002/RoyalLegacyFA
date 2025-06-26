function Services() {
    return (
      <div className="p-8">
        {/* Services */}
      <section className="bg-[#966639] text-[#e5e2d6] py-10 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
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
        </div>
      </section>
      {/* Services */}
      <section className="bg-[#966639] text-[#e5e2d6] py-10 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
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
      {/* Responsive Testimonial Video */}
          <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow-md max-w-5xl mx-auto ">
            <h4 className="text-2xl font-bold mb-4 text-center">Customer Feedback</h4>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <video
                controls
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg">
                <source src="/videos/testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
      
    );
  }
  
  export default Services;
  