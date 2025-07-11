import Navbar from '../components/Navbar';

function ReviewClosed() {
  return (
    <div className="bg-[#c5a468] text-[#000000] min-h-screen flex flex-col items-center justify-center text-center px-6 font-[Cinzel]">
      <Navbar />
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">We Want to Hear From You!</h2>
      <p className="text-lg sm:text-xl mb-6 max-w-xl">
        We appreciate your incredible support. We are no longer accepting reviews on the website at this time.
        We’d still love to hear your story and experience — please email us directly!
      </p>
      <a
        href="mailto:mwilliams@royallegacyfa.com"
        className="bg-[#000000] text-[#f1d782] font-bold py-3 px-6 rounded hover:bg-[#e5e2d6] hover:text-[#000000] transition"
      >
        mwilliams@royallegacyfa.com
      </a>
    </div>
  );
}

export default ReviewClosed;
