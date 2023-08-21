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
    <CommitteeDatePicker
      header="Date of Issuance"
      state="CommitteeDateOfIssuance"
      containerWidth="100"
      pickerWidth="1020"
    />

    <CommitteeDropdowns
      header="Stage of Development of Work Teams"
      width="100"
      state="CommitteeStageOfDevelopmentOfWorkTeams"
      :values="[
        { option: 'Establishment' },
        { option: 'Establishment2' },
        { option: 'Establishment3' },
      ]"
    />

    <CommitteeDropdowns
      header="Team Type"
      width="100"
      state="CommitteeTeamType"
      :values="[
        { option: 'Cross-functional Teams' },
        { option: 'None-cross-functional Teams' },
      ]"
    />

    <div class="d-flex justify-content-between">
      <CommitteeDatePicker
        header="Start Date of the Work of the Team"
        state="CommitteeStartDateOfTheWorkOfTheTeam"
        containerWidth="100"
        pickerWidth="480"
      />
      <CommitteeDatePicker
        header="End Date of the Work of the Team"
        state="CommitteeEndDateOfTheWorkOfTheTeam"
        containerWidth="100"
        pickerWidth="480"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CommitteeName from "./CommitteeName.vue";
import CommitteeRadioBtns from "./CommitteeRadioBtns.vue";
import CommitteeChairman from "./CommitteeChairman.vue";
import CommitteeDropdowns from "./CommitteeDropdowns.vue";
import CommitteeDatePicker from "./CommitteeDatePicker.vue";
</script>

<style scoped></style>
