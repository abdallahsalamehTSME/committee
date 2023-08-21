import { reactive } from "vue";

interface AppState {
  committeeDefinition: {
    Type: string;
    CommitteeChairmanId: number;
    CommitteeScope: string;
    CommitteeClassification: string;
    CommitteeIssuanceOfFormationDecision:string;
    CommitteeIssuedBy:string;
  };
  committeeMembers: object;
  CommitteeKpis: object;
  committeeInitiatives: object;
}

const state: AppState = reactive({
  committeeDefinition: {
    Type: "",
    CommitteeChairmanId: 1,
    CommitteeScope: "",
    CommitteeClassification: "",
    CommitteeIssuanceOfFormationDecision:"",
    CommitteeIssuedBy:""
  },
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
