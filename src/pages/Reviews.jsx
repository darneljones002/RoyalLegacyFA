import { useState, useEffect } from 'react';
import logo from '../assets/logos/RFL2-logo.png';

function Reviews() {
  const presetReviews = [
    { name: "Levetta W.", feedback: "Monitta is trustworthy, professional, and patient. She helped us so much with our family’s planning." },
    { name: "Jason R.", feedback: "The workshops were eye-opening and life-changing. I feel confident about my family's financial future." },
    { name: "Sandra M.", feedback: "She explained everything clearly and made financial planning feel simple and empowering." },
  ];

  const [newReviews, setNewReviews] = useState([]);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Load from localStorage on first mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('newReviews')) || [];
    setNewReviews(storedReviews);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('newReviews', JSON.stringify(newReviews));

    if (newReviews.length === 20) {
      notifyAdmin(20);
    }
    if (newReviews.length === 40) {
      notifyAdmin(40);
    }
  }, [newReviews]);

  const notifyAdmin = (count) => {
    // Here you'd actually call your backend or email API to send a real email
    console.log(`ADMIN ALERT: Feedback meter has exceeded ${count}+. Great job!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && feedback.trim()) {
      setNewReviews((prev) => [...prev, { name, feedback }]);
      setName('');
      setFeedback('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const displayReviews = newReviews.length >= 5
    ? [...presetReviews, ...newReviews]
    : presetReviews;

  return (
    <div className="bg-[#c5a468] text-[#000000] min-h-screen flex flex-col font-[Cinzel] relative overflow-x-hidden">
      <div className="flex flex-col items-center py-12 px-4 flex-grow">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-72 h-72 rounded-full object-cover mx-auto border-4 border-[#c5a468] shadow-md mb-4"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-8 border-b-4 border-[#000000] inline-block">
          Customer Reviews
        </h2>

        {/* Reviews */}
        <div className="max-w-3xl w-full space-y-6 mb-12">
          {displayReviews.map((review, idx) => (
            <div key={idx} className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow">
              <p className="italic">"{review.feedback}"</p>
              <p className="mt-2 font-semibold text-right">- {review.name}</p>
            </div>
          ))}
        </div>

        {/* Submit form */}
        {newReviews.length < 40 && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow max-w-lg w-full space-y-4"
          >
            <h3 className="text-xl font-bold">Leave Your Review</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#966639] rounded"
              required
            />
            <textarea
              placeholder="Your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 border border-[#966639] rounded h-32"
              required
            />
            <button
              type="submit"
              className="bg-[#000000] text-[#f1d782] font-bold py-2 px-6 rounded hover:bg-[#e5e2d6] hover:text-[#000000] transition"
            >
              Submit Review
            </button>
          </form>
        )}

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 bg-[#000000] text-[#f1d782] px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in-up z-50">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 rounded-full object-cover border-4 border-[#c5a468] shadow"
            />
            <span>Thank you for your feedback!</span>
          </div>
        )}
      </div>

      {/* Toast Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Reviews;
