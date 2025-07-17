import { useState, useEffect } from 'react';
import logo from '../assets/logos/RFL2-logo.png';

function Reviews() {
  const presetReviews = [
    { name: "Levetta W.", feedback: "Monitta is trustworthy, professional, and patient. She helped us so much with our family’s planning." },
    { name: "Jason R.", feedback: "The workshops were eye-opening and life-changing. I feel confident about my family's financial future." },
    { name: "Sandra M.", feedback: "She explained everything clearly and made financial planning feel simple and empowering." },
    { name: "Anonymous", feedback: "For some time, I pondered over insurance coverage for my two adult sons. Finally in a conversation with Monitta, I discovered that she could help me find affordable plans. She was thorough, knowledgeable, patient and expedient. Thank you so much Monitta. I am forever indebted to you." },
    { name: "LW", feedback: "In life the one thing we can never get back is time! The interaction and knowledge that I was educated with was invaluable. I will never forget the memorable moments my agent made me feel by following up and making sure my decision was the best for my future. Thanks for having a passion for what you do!" },
    { name: "Anonymous", feedback: "Friendly, knowledgeable of the product & great communicator." },
    { name: "Anonymous", feedback: "The agent was very polite, knowledgeable, caring and not aggressive." },
    { name: "Anonymous", feedback: "Monitta is very professional and very informed regarding life insurance. She stayed in touch with us throughout the process." },
    { name: "Anonymous", feedback: "You exemplify the true meaning of a woman that knows the Lord. You were a blessing to me and my family and I now feel secure in knowing that we are protected if anything were to happen." },
    { name: "Anonymous", feedback: "Mrs. Williams provided clear, insightful policy advice and responded with impressive speed throughout the process. I truly appreciate her integrity, professionalism, and support." },
    { name: "Anonymous", feedback: "Monitta is an awesome agent. She’s very professional and informative. My husband and I had a great experience. She made sure we thoroughly understood our policies and was available for additional questions." },
    { name: "Anonymous", feedback: "She had great knowledge about the insurance plan that she recommended to me. Great customer service." },
    { name: "Anonymous", feedback: "You exemplify the true meaning of a woman that knows my Lord and Savior Jesus Christ. You were a blessing to me and my family and I now feel secure in knowing that we are protected." },
    { name: "Anonymous", feedback: "The customer service was great and the way she was able to explain it to me was great." }
  ];

  const [newReviews, setNewReviews] = useState([]);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayReviews = [...presetReviews, ...newReviews];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('newReviews')) || [];
    setNewReviews(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('newReviews', JSON.stringify(newReviews));
    if (newReviews.length === 20 || newReviews.length === 40) {
      console.log(`ADMIN ALERT: Feedback meter exceeded ${newReviews.length}`);
    }
  }, [newReviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && feedback.trim()) {
      setNewReviews([...newReviews, { name, feedback }]);
      setName('');
      setFeedback('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length);
  };

  return (
    <div className="bg-[#c5a468] text-[#000000] min-h-screen flex flex-col items-center py-12 px-4 font-[Cinzel] relative overflow-hidden">

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-72 h-72 rounded-full object-cover border-4 border-[#c5a468] shadow-md mb-6"
      />

            {/* Carousel */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4 border-b-4 border-[#000000] inline-block">
        Client Reviews
      </h2>

      <div className="relative w-full max-w-3xl flex items-center justify-center">
        <button onClick={prevReview} className="absolute left-0 p-3 text-xl font-bold text-white bg-[#000000]/40 hover:bg-[#000000]/80 rounded-full z-10">
          ‹
        </button>

        <div className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow w-full text-center transition-all duration-300 ease-in-out mx-12">
          <p className="italic text-lg sm:text-xl">"{displayReviews[currentIndex].feedback}"</p>
          <p className="mt-4 font-semibold text-right">- {displayReviews[currentIndex].name}</p>
        </div>

        <button onClick={nextReview} className="absolute right-0 p-3 text-xl font-bold text-white bg-[#000000]/40 hover:bg-[#000000]/80 rounded-full z-10">
          ›
        </button>
      </div>

      <br/>
      <br/>
      {/* Review form moved to top */}
      {newReviews.length < 40 && (
        <form onSubmit={handleSubmit} className="bg-[#f1d782] text-[#000000] p-6 rounded-lg shadow max-w-lg w-full space-y-4 mb-10">
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Reviews;
