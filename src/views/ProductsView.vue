<template>
  <div>
    <!-- Hero section -->
    <section class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div class="md:w-1/2">
          <h1 class="text-5xl font-bold mb-4 text-center md:text-left">Browse Our Amazing Collection of Pet Products</h1>
          <p class="text-lg mb-8 text-center md:text-left">Find high-quality products for your beloved pets.</p>
        </div>
        <div class="md:w-1/2">
          <img
            src="../assets/images/product.png"
            alt="hero image"
            class="w-[350px] h-[350px] mx-auto"
          />
        </div>
      </div>
    </section>

    <!-- Products section -->
    <section class="py-10 bg-gray-100 h-[100vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
          <!-- Product card -->
          <div class="bg-white rounded-lg shadow-lg">
            <img src="product1.jpg" alt="Product" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Product 1</h3>
              <p class="text-gray-600">Description of the product.</p>
              <button class="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>

          <!-- Repeat the above product card for other products -->
          <!-- Product card -->
          <div class="bg-white rounded-lg shadow-lg">
            <img src="product2.jpg" alt="Product" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="text-xl font-bold text-gray-800">Product 2</h3>
              <p class="text-gray-600">Description of the product.</p>
              <button class="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
};
</script>
