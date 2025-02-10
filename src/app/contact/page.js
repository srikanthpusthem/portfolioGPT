export default function ContactPage() {
    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="max-w-4xl w-full space-y-8">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Have a question or just want to say hi? Drop me a message, and Ill
              get back to you as soon as I can.
            </p>
          </div>
  
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 mt-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
  
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 mt-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="youremail@example.com"
                />
              </div>
  
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 mt-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
  
          {/* Additional Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Alternatively, you can reach me at{" "}
              <a
                href="mailto:pusthesh@mail.uc.edu"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                pusthesh@mail.uc.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }