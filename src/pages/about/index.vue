<template>
  <div>
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Nuxt 3 project.</p>
    </div>
    <div>
      <p>Count: {{ counter.count }}</p>
      <button @click="counter.increment()">Increment ssss</button>
    </div>
  </div>
</template>

<script setup>
const counter = useCounterStore()
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 1.2em;
}
</style>
