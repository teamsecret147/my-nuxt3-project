<script lang="ts" setup>
export interface Props {
  isPartially?: boolean
}
const props = defineProps<Props>()
const classObject = computed(() => ({
  loading: true,
  'loading--partially': props.isPartially,
}))
</script>
<template>
  <span :class="classObject">
    <span class="loading_overlay">
      <FontAwesomeIcon :icon="['fas', 'gear']" size="lg" class="loading_spinner" />
    </span>
  </span>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading_spinner {
  color: rgb(95, 33, 194);
  animation: spin 2s linear infinite;
}
.loading_overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
