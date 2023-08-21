<script setup lang="ts">
import datepicker from "vue3-datepicker";
import { ref } from "vue";
import calendarSvg from "../../assets/icons/calendar-249.svg";
import { state } from "../../store/index";
const selectedDate = ref<any>(null);

const props = defineProps<{
  header: string;
  state: string;
  containerWidth: string;
  pickerWidth: string;
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <div class="text-secondary mt-1 fw-bold">
      {{ props.header }}<span class="star">*</span>
    </div>
    <div
      class="d-flex align-items-center px-2 mt-1"
      :style="{
        borderRadius: '5px',
        border: '0.5px solid #d1d0d0ee',
        width: `${props.containerWidth}%`,
      }"
    >
      <div
        class="d-flex place-content-center place-items-center"
        style="height: 45px"
      >
        <img height="45" width="25" class="colored" :src="calendarSvg" />
      </div>
      <datepicker
        class="px-3"
        :style="{
          height: '45px',
          border: 'none',
          width: `${props.pickerWidth}px`,
          outline: 'none',
        }"
        v-model="state.committeeDefinition[props.state]"
        format="yyyy-MM-dd"
      ></datepicker>
    </div>
  </div>
</template>
<style scoped></style>
