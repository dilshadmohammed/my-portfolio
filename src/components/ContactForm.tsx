import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("meokwlbl");
if (state.succeeded) {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <svg
                className="w-16 h-16 text-blue-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2 4-4" />
            </svg>
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Message Sent!</h2>
            <p className="text-gray-300 text-center">
                Thank you for reaching out. I appreciate your message and will get back to you as soon as possible.
            </p>
        </div>
    );
}
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-300"
          placeholder="Your name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-300"
          placeholder="your@email.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-300"
          placeholder="Tell me about your project..."
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;