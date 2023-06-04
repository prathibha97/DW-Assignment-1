<template>
  <div class="bg-gray-100">
    <!-- SubHero section -->
    <SubHero
      title="Explore Essential Pet Health Tips"
      subtitle="Discover ways to keep your pet happy and healthy."
      image="../../src/assets/images/pets.png"
    />

    <div class="container mx-auto px-4 py-8 h-[80vh] mb-[520px] md:mb-0">
      <h1 class="text-3xl font-bold mb-4">Pet Health Tips</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Tip 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 1: Nutrition</h2>
          <p class="text-gray-700">
            Provide a balanced diet with high-quality pet food. Avoid feeding them harmful human
            foods.
          </p>
        </div>

        <!-- Tip 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 2: Regular Exercise</h2>
          <p class="text-gray-700">
            Engage your pet in daily physical activities to maintain their overall health and
            fitness.
          </p>
        </div>

        <!-- Tip 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 3: Vaccinations</h2>
          <p class="text-gray-700">
            Keep your pet's vaccinations up to date to prevent common diseases and ensure their
            well-being.
          </p>
        </div>

        <!-- Tip 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 4: Dental Care</h2>
          <p class="text-gray-700">
            Brush your pet's teeth regularly and provide dental treats to maintain their oral
            hygiene.
          </p>
        </div>

        <!-- Tip 5 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 5: Mental Stimulation</h2>
          <p class="text-gray-700">
            Engage your pet in interactive play and provide mental stimulation to prevent boredom
            and anxiety.
          </p>
        </div>

        <!-- Tip 6 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Tip 6: Regular Vet Check-ups</h2>
          <p class="text-gray-700">
            Schedule routine check-ups with a veterinarian to monitor your pet's health and detect
            any potential issues early.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHero from '../components/SubHero.vue'

export default {
  name: 'HealthTipsView',
  components: {
    SubHero
  }
}
</script>
