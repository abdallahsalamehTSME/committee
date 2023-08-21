import { reactive } from "vue";

interface AppState {
  committeeDefinition: object;
  committeeMembers: object;
  CommitteeKpis: object;
  committeeInitiatives: object;
}

const state: AppState = reactive({
  committeeDefinition: {},
  committeeMembers: {},
  CommitteeKpis: {},
  committeeInitiatives: {},
});

// Expose methods to update the state , methods will be here 👇

//committeeDefinition methods 👇


//committeeMembers methods 👇



//CommitteeKpis methods 👇



//committeeInitiatives methods 👇


// Export the state and methods
export { state };
