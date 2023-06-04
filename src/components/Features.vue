<template>
  <!-- Features section -->
  <section class="py-16 md:h-[50vh]" id="features-section">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8">Why Choose Jack Pet Supplies?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-purple-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 0a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V6a6 6 0 00-6-6H6zm6 17.06a7.96 7.96 0 01-4-.96c-3.42 0-6-2.85-6-6 0-2.95 2.13-6 6-6s6 3.05 6 6c0 1.59-.62 3.09-1.74 4.21a2 2 0 11-2.82-2.82A3.978 3.978 0 016 7.06c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.64-.99 3.04-2.41 3.62a4 4 0 11-5.66 0A4.01 4.01 0 0112 7.06c0 .45-.11.88-.29 1.26l-3.07-3.07a.96.96 0 10-1.35 1.35l3.07 3.07c-.38.18-.81.29-1.26.29z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Wide Selection of Pets</h3>
          <p class="text-gray-700">Discover a variety of pets from different breeds and species.</p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-purple-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm5.707-6.707a1 1 0 00-1.414 0L10 13.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Trusted Breeders</h3>
          <p class="text-gray-700">
            We work with reputable breeders who prioritize the health and well-being of their
            animals.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-purple-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 0a5 5 0 100 10 5 5 0 000-10zM7 7H5a3 3 0 110-6h10a3 3 0 013 3v7a1 1 0 01-1 1h-2.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-1.414 0L7.293 14.707A1 1 0 017 14.293V7z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Expert Advice</h3>
          <p class="text-gray-700">
            Get professional advice and guidance on pet care, training, and more.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-purple-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 0a5 5 0 100 10 5 5 0 000-10zM7 7H5a3 3 0 110-6h10a3 3 0 013 3v7a1 1 0 01-1 1h-2.586a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-1.414 0L7.293 14.707A1 1 0 017 14.293V7z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Easy Adoption Process</h3>
          <p class="text-gray-700">Adopting a pet from us is simple and hassle-free.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesComponent'
}
</script>
