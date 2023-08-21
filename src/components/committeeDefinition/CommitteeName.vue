<template>
  <div class="d-flex flex-column my-3">
    <div class="text-secondary mt-1 fw-bold">
      Committee Name<span class="star">*</span>
    </div>
    <input type="text" class="mt-1 px-2 borderNone" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.borderNone:focus {
  outline: none;
}
.borderNone {
  border-radius: 5px;
  border: 0.5px solid #d1d0d0ee;
  height: 45px;
}
.star {
  color: #b88c33;
}
</style>
