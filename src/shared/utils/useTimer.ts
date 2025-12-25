import { watch, ref, type Ref, computed } from 'vue'

export default function useTimer(
  toMs: Ref<number>, fromMs: Ref<number>, active: Ref<boolean>, interval: number = 1000,
) {
  const timeDiff = ref(Math.abs(fromMs.value - toMs.value))

  watch([toMs, fromMs], () => {
    timeDiff.value = Math.abs(fromMs.value - toMs.value)
  })

  let intervalId: number | undefined = undefined

  watch([fromMs, toMs, active], () => {
    clearInterval(intervalId)
    if (active.value) {
      intervalId = setInterval(() => {
        timeDiff.value -= interval
        if (timeDiff.value <= 0) {
          clearInterval(intervalId)
          active.value = false
        }
      }, interval)
    }
  })

  return computed(() => toMs.value > fromMs.value ? toMs.value - timeDiff.value : toMs.value + timeDiff.value)
}
