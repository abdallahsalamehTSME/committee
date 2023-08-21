<template>
  <div>
    <div class="pt-1 fw-bold fs-5">Fill in the committee details</div>

    <CommitteeName />

    <CommitteeRadioBtns
      :radioBtns="[{ value: 'Creation' }, { value: 'Renewal' }]"
      feature="Type"
      header="Type"
    />

    <CommitteeChairman />

    <hr />

    <div class="pt-1 fw-bold fs-5">
      Fill in the details to the decision to form the committee
    </div>

    <CommitteeRadioBtns
      :radioBtns="[{ value: 'Internal' }, { value: 'External' }]"
      feature="CommitteeScope"
      header="Committee Scope"
    />

    <CommitteeRadioBtns
      :radioBtns="[
        { value: 'Not Set' },
        { value: 'Permanent' },
        { value: 'Temporary' },
      ]"
      feature="CommitteeClassification"
      header="Committee Classification"
    />

    <CommitteeDropdowns
      header="Issuance of Formation Decision"
      width="100"
      state="CommitteeIssuanceOfFormationDecision"
      :values="[
        { option: 'Ministerial Decision' },
        { option: 'Normal Decision' },
        { option: 'External Decision' },
      ]"
    />

    <CommitteeDropdowns
      header="Issued by"
      width="100"
      state="CommitteeIssuedBy"
      :values="[
        { option: 'Ministerial' },
        { option: 'governmental' },
        { option: 'authoritarian' },
      ]"
    />
    <CommitteeDatePicker />
  </div>
</template>

<script setup lang="ts">
import CommitteeName from "./CommitteeName.vue";
import CommitteeRadioBtns from "./CommitteeRadioBtns.vue";
import CommitteeChairman from "./CommitteeChairman.vue";
import CommitteeDropdowns from "./CommitteeDropdowns.vue";
import CommitteeDatePicker from "./CommitteeDatePicker.vue";
</script>

<style scoped>
.borderNone:focus {
  outline: none;
}
.borderNone {
  border-radius: 5px;
  border: 0.5px solid #d1d0d0ee;
}

.form-check-input:checked {
  background-color: #b88c33;
  border-color: #b88c33;
}
</style>
