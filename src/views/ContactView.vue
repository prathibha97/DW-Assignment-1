<template>
  <div>
    <!-- Contact section -->
    <section class="py-10 mt-10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <div class="flex flex-col md:flex-row items-center justify-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <img
              src="../assets/images/contact1.png"
              alt="Contact"
              class="w-full md:w-[75%] max-w-xs rounded-lg shadow-lg bg-purple-300"
            />
          </div>
          <div class="md:w-1/2 md:ml-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p class="text-gray-600 mb-4 text-justify md:text-left">
              We would love to hear from you! If you have any questions, feedback, or inquiries,
              please don't hesitate to reach out to us using the contact information below.
            </p>
            <ul class="text-gray-600 mb-4">
              <li><strong>Email:</strong> info@jackpetsupplies.com</li>
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Address:</strong> 123 Pet Street, London, United Kingdom</li>
            </ul>
            <p class="text-gray-600 text-justify md:text-left">
              Our friendly team is ready to assist you and provide you with the best pet shopping
              experience. Feel free to contact us anytime!
            </p>
          </div>
        </div>
        <div class="mt-8 md:mb-[230px]">
          <form>
            <div class="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div class="mb-4">
              <textarea
                placeholder="Your Message"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-purple-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style>
@media (min-width: 768px) {
  .max-w-xs {
    max-width: none;
  }
}
</style>
