<template>
  <section class="bg-white py-16 md:h-[60vh]" id="contact-section">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8">Contact Us</h2>
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-1/2">
          <p class="text-gray-700 mb-4">Have questions or need assistance? Reach out to us!</p>
          <p class="text-gray-700 mb-4">123 Pet Street, London, United Kingdom</p>
          <p class="text-gray-700 mb-4">Phone: (123) 456-7890</p>
          <p class="text-gray-700 mb-4">Email: info@jackpetsupplies.com</p>
        </div>
        <div class="sm:w-1/2 flex flex-col">
          <form>
            <div class="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div class="mb-4">
              <textarea
                placeholder="Your Message"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-primary-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>
