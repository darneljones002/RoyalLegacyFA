import { useEffect, useRef, useState } from 'react';

function Appointments() {
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Listen for form reload after submit (Google Forms redirects to same URL)
  useEffect(() => {
    const interval = setInterval(() => {
      const iframeDoc = iframeRef.current?.contentDocument;
      if (iframeDoc && iframeDoc.body.innerText.includes('Your response has been recorded')) {
        setSubmitted(true);
        setLoading(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e2d6] text-[#000000] flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center font-[Cinzel]">
        Schedule Your Consultation
      </h2>

      {submitted ? (
        <div className="bg-[#f1d782] text-center px-6 py-10 rounded-lg shadow-md max-w-xl w-full animate-fade-in">
          <h3 className="text-2xl font-semibold text-[#000000] mb-4">Thank you!</h3>
          <p className="text-lg">
            Your appointment has been successfully scheduled. We’ll follow up with you shortly.
          </p>
        </div>
      ) : (
        <>
          {loading && (
            <div className="text-center mb-6 animate-pulse text-[#966639] font-medium">
              Loading appointment form...
            </div>
          )}

          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSfFGqOYSf7cMa6QnKAC_U6z_a8VKKzlN-xvTHHS_B2WIvOlKw/viewform?embedded=true"
            className="w-full max-w-4xl h-[1200px] rounded-lg border shadow-lg"
            loading="lazy"
            onLoad={() => setLoading(false)}
            title="Appointment Form"
          />
        </>
      )}
    </div>
  );
}

export default Appointments;
