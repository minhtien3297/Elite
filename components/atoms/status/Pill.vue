<template>
  <span
    v-if="label === LABELS.PART_TIME"
    class="text-transform: rounded-[20px] bg-green-50/30 py-1.5 px-2.5 text-sm font-normal capitalize leading-[18px] text-green-100"
    >{{ LABELS.PART_TIME }}</span
  >
  <span
    v-else-if="label === LABELS.FULL_TIME"
    class="text-transform: rounded-[20px] bg-blue-100/30 py-1.5 px-2.5 text-sm font-normal capitalize leading-[18px] text-blue-200"
    >{{ LABELS.FULL_TIME }}</span
  >
  <span
    v-else-if="label === LABELS.URGENT"
    class="text-transform: rounded-[20px] bg-yellow/30 py-1.5 px-2.5 text-sm font-normal capitalize leading-[18px] text-orange"
    >{{ LABELS.URGENT }}</span
  >
</template>

<script lang="ts" setup>
import { LABELS } from '@/constants/common'

defineProps({
  label: String,
})
</script>
