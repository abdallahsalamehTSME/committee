<template>
  <div class="d-flex flex-column h-auto">
    <div class="fs-6 text-secondary my-2 fw-bold">
      Committee Chairman<span class="star">*</span>
    </div>

    <div class="d-flex container1">
      <div
        class="dropDownName p-2 d-flex align-items-center justify-content-evenly"
      >
        <div>
          <img
            :src="selectedChairman.imageUrl"
            class="rounded-circle"
            style="width: 30px"
            alt="Avatar"
          />
        </div>
        <span class="ml-2 fw-bold">{{ selectedChairman.name }}</span>
      </div>

      <select
        aria-label="Default select example"
        class="p-2 borderNone dropdown"
        style="color: #90a0be"
        v-model="state.committeeDefinition.CommitteeChairmanId"
      >
        <option
          v-for="item in committeeChairmanValues"
          :key="item.id"
          :value="item.id"
        >
          {{ item.education }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { state } from "../../store/index";
import { computed } from "vue";

interface committeeChairmanInterface {
  id: number;
  imageUrl: string;
  name: string;
  education: string;
}
const committeeChairmanValues: committeeChairmanInterface[] = [
  {
    id: 1,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    name: "His Excellency / Eng.Ahmed Al Kaabi",
    education: "Undersecretary of the Ministry of Energy and Petroleum",
  },
  {
    id: 2,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
    name: "His Excellency / Eng.Abdullah Salameh",
    education: "Hashmite University Zarqa-Jordan",
  },
  {
    id: 3,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
    name: "His Excellency / Dr.mohammad Salameh",
    education: "University of jordan Amman-Jordan",
  },
];

const selectedChairman = computed<committeeChairmanInterface>(
  (): committeeChairmanInterface => {
    return committeeChairmanValues.find(
      (ele) => ele.id === state.committeeDefinition.CommitteeChairmanId
    ) as committeeChairmanInterface;
  }
);
</script>

<style scoped>
.borderNone:focus {
  outline: none;
}
.borderNone {
  border-radius: 0px 5px 5px 0px;
  border: 0.5px solid #d1d0d0ee;
  border-left: none;
}

.dropdown {
  width: 65%;
}
.dropDownName {
  width: 35%;
  border: 0.5px solid #d1d0d0ee;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  color: #b88c33;
}
.star {
  color: #b88c33;
}
.container1 {
  height: 45px;
}
</style>
