<script lang="ts" setup>
const error = useError()
const errorMessage = error.value instanceof Error ? error.value.message : error.value?.statusMessage

const title = computed(() => {
  switch (errorMessage) {
    case '404: Not Found':
      return `Error 404: Not Found`
    default:
      return `Error 404: Not Found`
  }
})

const message = computed(() => {
  switch (errorMessage) {
    case '404: Not Found':
      return `Error 404: Not Found`
    default:
      return `Error 404: Not Found`
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-mainLayoutBackground min-w-[1%] md:min-w-[1180px]">
    <ClientOnly>
      <NuxtLoadingIndicator :color="`#14c3dc`" />
      <div class="container container--sm py-10 my-10">
        <div class="general_heading">
          <h1 class="text-4xl text-center">{{ title }}</h1>
        </div>
        <div class="text-center">
          <div class="mb-9">
            <p>{{ message }}</p>
          </div>
          <a href="/" class="text-link transition hover:underline hover:text-link-700">
            Error 404
            <i class="fa-solid fa-chevron-right ml-1" />
          </a>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.general_heading {
  margin-bottom: 60px;

  h1 {
    font-weight: 700;
    margin-bottom: 8px;
  }

  &::after {
    content: ' ';
    display: block;
    width: 360px;
    max-width: 90%;
    margin: 34px auto 0;
    height: 4px;
    background-color: #28c3d4;
    position: relative;
    visibility: visible;
  }
}

.show_sp {
  display: none;
}

@media screen and (max-width: 768px) {
  .general_heading {
    &::after {
      width: 100%;
      max-width: 90%;
      margin: 24px auto 0;
    }
  }

  .show_sp {
    display: block;
  }
}
</style>
