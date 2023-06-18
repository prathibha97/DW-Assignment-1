<template>
  <div class="bg-gray-100">
    <!-- SubHero section -->
    <SubHero
      title="Explore Essential Pet Health Tips"
      subtitle="Discover ways to keep your pet happy and healthy."
      image="../../src/assets/images/pets.png"
    />

    <div class="container mx-auto px-4 py-8 h-[100vh] md:h-[80vh] mb-[520px] md:mb-0">
      <h1 class="text-3xl font-bold mb-4">Pet Health Tips</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="tip in healthTips" :key="tip.title">
          <HealthTip :title="tip.title" :desc="tip.desc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HealthTip from '../components/HealthTip.vue'
import SubHero from '../components/SubHero.vue'

export default {
  data() {
    return {
      healthTips: [
        {
          title: 'Tip 1: Nutrition',
          desc: 'Engage your pet in interactive play and provide mental stimulation to prevent boredom and anxiety.'
        },
        {
          title: 'Tip 2: Regular Exercise',
          desc: 'Engage your pet in daily physical activities to maintain their overall health and fitness.'
        },
        {
          title: 'Tip 3: Vaccinations',
          desc: "Keep your pet's vaccinations up to date to prevent common diseases and ensure their well-being."
        },
        {
          title: 'Tip 4: Dental Care',
          desc: "Brush your pet's teeth regularly and provide dental treats to maintain their oral hygiene."
        },
        {
          title: 'Tip 5: Mental Stimulation',
          desc: 'Engage your pet in interactive play and provide mental stimulation to prevent boredom and anxiety.'
        },
        {
          title: 'Tip 6: Regular Vet Check-ups',
          desc: "Schedule routine check-ups with a veterinarian to monitor your pet's health and detect any potential issues early."
        }
      ]
    }
  },
  name: 'HealthTipsView',
  components: {
    SubHero,
    HealthTip
  }
}
</script>
