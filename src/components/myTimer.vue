<template>
  <v-card width="fit-content"  class="pa-2 d-flex flex-column align-center" style="gap: 10px">
    <p class="text-h5">Timer</p>
    <v-card class="d-flex align-center" >
      <v-card
        variant="outlined"
        color="secondary"
        style="min-height: 56px; min-width: 56px; margin: 0; display: grid; place-items: center"
      >
        {{parsedTimer}}
      </v-card>
      <v-card class="d-flex align-center pa-2" style="gap: 10px; " >
        <v-text-field
          @change="toMs = $event.target.value*1000"
          label="To" type="number"
          variant="outlined"
          hide-details
          :disabled="isActive"
        />
        <v-text-field
          @change="fromMs = $event.target.value*1000"
          label="From"
          type="number"
          variant="outlined"
          hide-details
          :disabled="isActive"
        />
        <v-btn v-show="!isActive" @click="isActive = true" variant="elevated" color="success" >Start</v-btn>
        <v-btn v-show="isActive" @click="isActive = false" variant="elevated" color="error" >Stop</v-btn>
      </v-card>
    </v-card>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import useTimer from '@/shared/utils/useTimer'
const isActive = ref(false)
const toMs = ref(0)
const fromMs = ref(0)
const timerMs = useTimer(toMs, fromMs, isActive)

const parsedTimer = computed(() => timerMs.value / 1000)

</script>

<style scoped>

</style>
