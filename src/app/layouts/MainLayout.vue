<script setup lang="ts">
import { NLayout, NLayoutContent } from "naive-ui"
</script>
<template>
  <n-layout>
    <n-layout-content>
      main layout
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>
