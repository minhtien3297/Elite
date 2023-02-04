<template>
  <NuxtLink :to="pageRouter.HOME" class="flex items-center">
    <img :src="iconPath.ELITE_LOGO" class="mr-3" alt="Elite Logo" />
    <span class="self-center whitespace-nowrap font-montserrat text-xl font-semibold text-black"
      >ELITE</span
    >
  </NuxtLink>
</template>

<script lang="ts" setup>
import pageRouter from '@/constants/pageRouter'
import iconPath from '@/constants/iconPath'
</script>
