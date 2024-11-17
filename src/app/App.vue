<script setup lang="ts">
import { themeOverrides } from "./assets/naive-overrides"
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped lang="scss">
.n-config-provider {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
