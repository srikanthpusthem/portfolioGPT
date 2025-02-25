"use client";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-3xl w-full space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <h1
            className="
              text-4xl font-extrabold
              text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-green-400
            "
          >
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Have a question or just want to say hi? Drop me a message, and I’ll
            get back to you as soon as I can.
          </p>
        </div>

        {/* Contact Form Container */}
        <div
          className="
            bg-white/5 backdrop-blur-md
            border border-gray-700
            rounded-xl p-8 shadow-lg
            hover:shadow-2xl transition-shadow duration-300
          "
        >
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="
                  w-full p-3 mt-2 text-sm rounded-lg
                  border border-gray-600
                  bg-gray-800 text-gray-100
                  placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                "
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="
                  w-full p-3 mt-2 text-sm rounded-lg
                  border border-gray-600
                  bg-gray-800 text-gray-100
                  placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                "
                placeholder="youremail@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="
                  w-full p-3 mt-2 text-sm rounded-lg
                  border border-gray-600
                  bg-gray-800 text-gray-100
                  placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                "
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="
                  px-6 py-3
                  bg-gradient-to-r from-blue-600 to-green-500
                  hover:from-blue-700 hover:to-green-600
                  text-white text-lg font-medium
                  rounded-lg shadow-md
                  transition-all duration-300
                  transform hover:-translate-y-1
                "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div
          className="
            bg-gray-800
            rounded-lg p-4 shadow-md text-center
          "
        >
          <p className="text-sm text-gray-400">
            Alternatively, you can reach me at{" "}
            <a
              href="mailto:pusthesh@mail.uc.edu"
              className="text-blue-400 hover:underline"
            >
              pusthesh@mail.uc.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}