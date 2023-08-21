<template>
  
    <h2>Add Consultant</h2>
    <div class="d-flex flex-column mt-3">
      <span>Name<span class="text-danger">*</span></span>
      <input type="text" />
    </div>
    <div class="d-flex flex-column mt-3">
      <span>Entity Name<span class="text-danger">*</span></span>
      <input type="text" />
    </div>
    <div class="d-flex flex-column mt-3">
      <span>Occupation<span class="text-danger">*</span></span>
      <input type="text" />
    </div>
    <div class="d-flex justify-content-start">
      <div class="d-flex flex-column mt-3 w-100">
        <span>start Date<span class="text-danger">*</span></span>
        <input type="text" class="ps-5 pe-5 me-4" />
      </div>
      <div class="d-flex flex-column mt-3 w-100">
        <span>end date<span class="text-danger">*</span></span>
        <input type="text" class="ps-5 pe-5" />
      </div>
  </div>
  <div class="d-flex">
    
    <p><input type="checkbox" class="me-2" />Consulting services are still ongoing</p>
  </div>
<div>
    <p>Reasons for hiring <span class="badge bg-secondary">Optional</span></p> 
<textarea name="ReasonsForHiring" id="1" cols="119" rows="2"></textarea>
</div>
<div>
    <p>Achievements <span class="badge bg-secondary">Optional</span></p> 
<textarea name="ReasonsForHiring" id="1" cols="119" rows="2"></textarea>
</div>

<div class="d-flex flex-row-reverse bd-highlight">
    <button class="ps-2 pe-1 btn btn-primary" style="background-color:#b88c33 ; font-size: smaller; ">Add Consultant</button>
    <button class="btn btn-light me-3">Cancel</button>
</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
