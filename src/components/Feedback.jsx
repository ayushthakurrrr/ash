import { useState } from "react";
import "../css/feedback.css";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    setLoading(true);
    const response = await fetch("https://formspree.io/f/xvgagjye", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section className="feedback-page">
      <h1>Feedback.</h1>
      <p>
        We are 20 year old humans and trying to spread the importance of digitalization to anyone.
        Your feedback helps us grow and serve you better. We value your thoughts — whether it's
        appreciation, suggestions, or even criticism. <br/> Thank you for helping ASH become better every day!
      </p>

      {submitted ? (
        <p className="thank-you-message">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <textarea
            name="message"
            placeholder="write here..."
            required
          />
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? (
              <div className="loader"></div>
            ) : (
              "Submit."
            )}
          </button>
        </form>
      )}
    </section>
  );
}
