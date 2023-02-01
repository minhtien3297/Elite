<template>
  <span
    v-if="label === LABELS.FEATURED"
    class="text-transform: inline-block h-[26px] w-[89px] rounded bg-orange-50 py-px px-2 text-sm font-medium uppercase leading-6 text-white"
    >{{ LABELS.FEATURED }}</span
  >
  <span
    v-else-if="label === LABELS.RENT"
    class="text-transform: inline-block h-[26px] w-[54px] rounded bg-blue-50 py-px px-[9px] text-sm font-medium uppercase leading-6 text-white"
    >{{ LABELS.RENT }}</span
  >
  <span
    v-else-if="label === LABELS.SALE"
    class="text-transform: inline-block h-[26px] w-[54px] rounded bg-green-50 py-px px-2 text-sm font-medium uppercase leading-6 text-white"
    >{{ LABELS.SALE }}</span
  >
  <span
    v-else-if="label === LABELS.HOT"
    class="text-transform: inline-block h-[26px] w-[54px] rounded bg-red py-px px-3 text-sm font-medium uppercase leading-6 text-white"
    >{{ LABELS.HOT }}</span
  >
  <span
    v-else-if="label === LABELS.MARKET_NEWS"
    class="text-transform: inline-block h-[26px] w-[128px] rounded bg-gray-50 py-px px-3 text-sm font-medium uppercase leading-6 text-gray-100"
    >{{ LABELS.MARKET_NEWS }}</span
  >
</template>

<script lang="ts" setup>
import { LABELS } from '@/constants/common'

defineProps<{
  label: string
}>()
</script>
