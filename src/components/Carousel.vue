<template>
  <div class="wrapper">
    <Flicking :options="{ align: 'prev', circular: true, adaptive: true }" @move-end="onMoveEnd">
      <div class="panel" key="1">
        <img src="../assets/images/pedigree.webp" alt="" />
      </div>
      <div class="panel" key="2">
        <img src="../assets/images/royal.png" alt="" />
      </div>
      <div class="panel" key="3">
        <img src="../assets/images/pedigree.webp" alt="" />
      </div>
      <div class="panel" key="4">
        <img src="../assets/images/royal.png" alt="" />
      </div>
      <div class="panel" key="5">
        <img src="../assets/images/pedigree.webp" alt="" />
      </div>
    </Flicking>
  </div>
</template>

<script>
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'

export default {
  name: 'CarouselComponent',
  components: {
    Flicking: Flicking
  },
  methods: {
    onMoveEnd() {
      console.log('onMoveEnd')
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
}

.panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.panel img {
  max-width: 100%;
  max-height: 500px;
}

/* Mobile view styles */
@media (max-width: 640px) {
  .flicking-viewport {
    flex-direction: column;
  }
}
</style>
