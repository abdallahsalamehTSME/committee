<template>
  <div class="d-flex flex-column h-auto my-3">
    <div class="fs-6 text-secondary mt-1 fw-bold">
      {{ props.header }}<span class="star">*</span>
    </div>
    <select
      aria-label="Default select example"
      class="mt-1 borderNone dropdown"
      v-model="state.committeeDefinition[props.state]"
      :style="{ width: `${props.width}%` }"
    >
      <option v-for="item in values" :key="item.option" :value="item.option">
        {{ item.option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { state } from "../../store/index";
const props = defineProps<{
  header: string;
  width: string;
  state: string;
  values: { option: string }[];
}>();
</script>

<style scoped>
.borderNone:focus {
  outline: none;
}
.borderNone {
  border-radius: 5px;
  border: 0.5px solid #d1d0d0ee;
}
.star {
  color: #b88c33;
}
.dropdown {
  height: 45px;
}
</style>
