<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-gray-700">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HealthTipComponent',
  props: {
    title: String,
    desc: String
  }
}
</script>
