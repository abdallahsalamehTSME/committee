<template>
  <div class="d-flex flex-column h-auto my-3">
    <div class="fs-6 text-secondary mt-1 fw-bold">
      {{ props.header }}
      <span class="star">*</span>
    </div>
    <div
      class="d-flex flex-row justify-content-between mt-2"
      :style="{ width: props.radioBtns.length * 12 + '%' }"
    >
      <div
        class="form-check"
        v-for="item in radioBtns"
        :key:string="item.value"
      >
        <input
          class="form-check-input"
          type="radio"
          :name="item.value"
          :id="item.value"
          :value="item.value"
          v-model="state.committeeDefinition[props.feature]"
        />
        <label class="form-check-label" :for="item.value">
          {{ item.value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { state } from "../../store/index";

const props = defineProps<{
  radioBtns: { value: string }[];
  feature: string;
  header: string;
}>();
</script>

<style scoped>
.form-check-input:checked {
  background-color: #b88c33;
  border-color: #b88c33;
}
.star {
  color: #b88c33;
}
</style>
